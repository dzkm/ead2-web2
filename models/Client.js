const DataType = require("sequelize");
const MySQLConnection = require("../database/MySQLConnection");

const Client = MySQLConnection.define("Client", {
    id: {
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataType.STRING,
        allowNull: false
    },
    email: {
        type: DataType.STRING,
        allowNull: true
    },
    cidade: {
        type: DataType.STRING,
        allowNull: false
    },
    estado: {
        type: DataType.CHAR(2),
        allowNull: false
    },
    cep: {
        type: DataType.STRING,
        allowNull: false
    }
});

(async () => {
    try {
        await Client.sync();
        console.log("Tabela do cliente criada com sucesso");
    } catch (error) {
        console.error("Houve um erro durante a criação da tabela de cliente: ", error);
    }
})();

module.exports = Client;