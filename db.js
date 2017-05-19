const pg = require('pg');

const config = {
    user: 'guddqtkxogtzty',
    database: 'dastmv3kjk6mfe',
    password: 'a3d83bccb5e7d61993c5caac5391218aab92ea10e7c8c89ffabc118423952b1c',
    host: 'ec2-54-163-246-154.compute-1.amazonaws.com',
    port: 5432,
    max: 20,
    idleTimeoutMillis: 1000,
    ssl: true
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
