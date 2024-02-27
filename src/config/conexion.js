require('dotenv').config();

const mongoose = require('mongoose');

const uri = `mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@hoteldatabase.tzzvncs.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

const connection = () => {
    return mongoose.connect(uri, {});
};

module.exports = connection;