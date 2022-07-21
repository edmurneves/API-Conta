const mysql = require('mysql2/promise');
require('dotenv').config();

const connection = mysql.createPool({
    host: process.env.MYSQL_HOST || 'localhost',
    user: process.env.MYSQL_USER || 'trybe',
    password: process.env.MYSQL_PASSWORD || 'trybe12345',
    database: process.env.MYSQL_DATABASE || 'desafioXP',
});

module.exports = connection;