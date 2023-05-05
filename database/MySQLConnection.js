const sequelize = require('sequelize');
const config = require('../config.json');
const MySQLConnection = new sequelize(config.mysql.database, config.mysql.username, config.mysql.password,{
    host: config.mysql.hostname,
    port: config.mysql.port,
    dialect: "mysql",
    define: {
        timestamps: false,
        freezeTableName: true
    }
});

MySQLConnection.authenticate().then(() => {
    console.log("Conexão SQL efetuada com sucesso.");
}).catch((error) => {
    console.error("Sequelize? Mais para sequelado haha. Error: ", error);
});

module.exports = MySQLConnection;