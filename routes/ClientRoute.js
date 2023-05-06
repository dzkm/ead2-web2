const express = require('express');
const ClientController = require('../controllers/ClientController');

const ClientRoute = express.Router();

ClientRoute.get("/", (req,res) => ClientController.listarTodos(req, res));
ClientRoute.get("/:id", (req,res) => ClientController.buscarPorId(req, res));
ClientRoute.get("/cidade/:cidade", (req,res) => ClientController.buscarPorCidade(req, res));
ClientRoute.post("/", (req,res) => ClientController.criar(req, res));
ClientRoute.put("/:id", (req,res) => ClientController.atualizar(req, res));
ClientRoute.delete("/:id", (req,res) => ClientController.excluir(req, res));

module.exports = ClientRoute;