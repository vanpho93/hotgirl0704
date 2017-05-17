const queryDB = require('./db');

class HotGirl {
    constructor(id, name, image, like, dislike) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.like = like;
        this.dislike = dislike;
    }

    getHotGirl(cb) {
        const sql = 'SELECT * FROM "HotGirl" WHERE id = $1';
        queryDB(sql, [this.id], (err, result) => {
            if (err) return cb(err);
            cb(undefined, result.rows[0]);
        });
    }
}

module.exports = HotGirl;
