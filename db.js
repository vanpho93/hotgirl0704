const pg = require('pg');

const config = {
    user: 'postgres',
    database: 'NODE1603',
    password: 'khoapham',
    host: 'localhost',
    port: 5432,
    max: 3,
    idleTimeoutMillis: 1000
};

const pool = new pg.Pool(config);

const queryDB = (sql, arrayData, cb) => {
    pool.connect((err, client, done) => {
        if (err) return cb(err, undefined);
        client.query(sql, arrayData, (errQuery, result) => {
            done(errQuery);
            if (errQuery) return cb(errQuery, undefined);
            cb(undefined, result);
        });
    });
};

module.exports = queryDB;

/*

    INSERT INTO public."HotGirl"(name, image, "like", dislike)
	VALUES ('Elly Tran', '2.jpeg', 1, '3'),
('Ngoc Trinh', '3.jpg', 2, '3'),
('Chipu', '4.png', 4, '3'),
('Midu', '5.png', 12, '3'),
('Mai Phuong Thuy', '1.jpg', 97, '8')
*/

