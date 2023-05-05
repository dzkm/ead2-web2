const Client = require("../models/Client.js");
const ClientController = {};


ClientController.listarTodos = async (req, res) => {
    try{
        let AllClientes = await Client.findAll();
        res.status(200).json(AllClientes);
    }catch(error){
        res.status(500).json(error)
    }
}

ClientController.buscarPorId = async (req, res) => {
    try{
        const SingleClient = await Client.findbyPk(req.params.id);
        res.status(200).json(SingleClient); 
    }catch(error){
        res.status(422).json("Nenhum cliente encontrado.");
    }
}

ClientController.buscarPorCidade = async (req, res) => {
    try{
        const SingleClient = await Client.findAndCountAll({
            where: {
                cidade: {
                    [Op.like]: `%${req.params.cidade}%`
                }
            }
        });
        res.status(200).json(SingleClient);
    }catch(error){
        res.status(422).json("Nenhum cliente encontrado.");
    }
}

ClientController.criar = async (req, res) => {
    try{

    }catch(error){
        res.status(500).json(error);
    }
}

ClientController.atualizar = async (req, res) => {
    try{

    }catch(error){
        res.status(500).json(error);
    }
}

ClientController.excluir = async (req, res) => {
    try{

    }catch(error){
        res.status(500).json(error);
    }
}

ClientController.listasTodos = async (req, res) => {
    try{

    }catch(error){
        res.status(500).json(error);
    }
}

module.exports = ClientController;