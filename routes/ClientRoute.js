const express = require('express');
const ctrlClient = require('../controllers/ClientController');

const routes = express.Router();

routes.get("/", (req,res) => ctrlClient.listasTodos(req, res));