require('dotenv').config();

const environment = process.env;

const SERVER_SECRET_KEY = environment.PRIVATE_KEY;

const PORT = environment.PORT || 3200;

const DB_URL = environment.DB_CONNECTION;



module.exports = { DB_URL, PORT, SERVER_SECRET_KEY };
