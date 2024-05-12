const {MongoClient}= require("mongodb");

var config = {
    "dbHost": "mongodb://localhost:27017"
    , "dbName": "docshare"
    
}

try {
    var cnf = require("./config.json");
    config = Object.assign(config, cnf);
} catch (error) {
    
}

// const dao = new Mysql(config.dbHost, config.dbUser, config.dbPassword, config.dbName);
const dao = new MongoClient(config.dbHost);


module.exports = dao;
