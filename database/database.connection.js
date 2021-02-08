const mongoose = require("mongoose");

const { DB_URL } = require("../configuration/configuration");

const connectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
};

const ConnectDB = async () => {
    try {
        await mongoose.connect(DB_URL, connectionOptions);
        console.log('Connected to database ==> 100%');
    } catch (error) {
        console.log("Connection failed!");
    }

}

module.exports = ConnectDB;
