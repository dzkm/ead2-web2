const express = require('express');
const ClientRoute = require("./routes/ClientRoute");
const Server = new express();
const ServerPort = 3000;

Server.use(express.json());
Server.use(express.urlencoded({extended: true}));
Server.use(ClientRoute);

app.listen(ServerPort, () => console.log(`Servidor está rodando em: http://localhost:${port}`));