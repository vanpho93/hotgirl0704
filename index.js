const express = require('express');
const HotGirl = require('./HotGirl');

const app = express();
app.listen(process.env.PORT || 3000, () => console.log('Server started'));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => res.render('home'));

app.get('/show/:id', (req, res) => {
    const { id } = req.params;
    const girl = new HotGirl(id);
    girl.getHotGirl((err, result) => {
        if (result) return res.render('show', result);
        res.redirect('/show/1');
    });
});

app.get('/like/:id', (req, res) => {
    const { id } = req.params;
    const girl = new HotGirl(id);
    girl.likeGirl((err, like) => {
        if (err) return res.send(err);
        res.send(like.toString());
    });
});

app.get('/girl/:id', (req, res) => {
    const { id } = req.params;
    const girl = new HotGirl(id);
    girl.getHotGirl((err, result) => {
        if (result) return res.send(result);
        res.redirect('/girl/1');
    });
});

