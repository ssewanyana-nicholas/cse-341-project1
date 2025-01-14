const express = require('express');
require('dotenv').config();
const app = express();
const mongodb = require('./data/database');

const port = process.env.PORT || 3000;

app.use('/', require('./routes'));

mongodb.initDb((err) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port, () => {
            console.log(`Database is listening and node running on port ${port}`);
        });
    }
});
