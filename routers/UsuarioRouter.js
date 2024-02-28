const express = require('express');
const usuarioRouter = express.Router();

const { listarUsuarios, buscarUsuario, adicionarUsuario } = require('../controller/UsuarioController');

usuarioRouter.get('/', listarUsuarios);
usuarioRouter.get('/:email', buscarUsuario);
usuarioRouter.post('/', adicionarUsuario);

module.exports = usuarioRouter;