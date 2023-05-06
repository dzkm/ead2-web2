const Client = require("../models/Client");
const Op = require("sequelize");
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
        const SingleClient = await Client.findByPk(req.params.id);
        res.status(200).json(SingleClient); 
    }catch(error){
        res.status(422).json("Nenhum cliente encontrado. " + error);
    }
}

ClientController.buscarPorCidade = async (req, res) => {
    try{
        const {SingleClient, CountClient} = await Client.findAll({
            where: {
                cidade:  req.params.cidade
            }
        });
        res.status(200).json(`Encontrado ${CountClient} cliente(s) nessa cidade:` + SingleClient);
    }catch(error){
        res.status(422).json("Nenhum cliente encontrado. " + error);
    }
}

ClientController.criar = async (req, res) => {
    try{
        const newClient = await Client.create({
            nome: req.body.nome,
            email: req.body.email,
            cidade: req.body.cidade,
            estado: req.body.estado,
            cep: req.body.cep 
        })
        res.status(200).json(newClient);
    }catch(error){
        res.status(422).json("Erro ao cadastrar cliente. " + error);
    }
}

ClientController.atualizar = async (req, res) => {
    try{
        let ClientToUpdate = await Client.findByPk(req.params.id);
        ClientToUpdate.nome = req.body.nome;
        ClientToUpdate.email = req.body.email;
        ClientToUpdate.cidade = req.body.cidade;
        ClientToUpdate.estado = req.body.estado;
        ClientToUpdate.cep = req.body.cep;
        await ClientToUpdate.save();
        res.status(200).json(ClientToUpdate);
    }catch(error){
        res.status(422).json("Erro ao atualizar cliente. " + error);
    }
}

ClientController.excluir = async (req, res) => {
    try{
        await Client.destroy({where: {id: req.params.id}})
        res.status(200).json("Cliente deletado com sucesso");
    }catch(error){
        res.status(422).json("Erro ao deletar cliente. " + error);
    }
}

module.exports = ClientController;