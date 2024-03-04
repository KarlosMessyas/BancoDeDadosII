const express = require('express');
const usuarioRouter = express.Router();

const { listarUsuarios, buscarUsuario, adicionarUsuario, removerUsuario } = require('../controller/UsuarioController');

usuarioRouter.get('/', listarUsuarios);
usuarioRouter.get('/:email', buscarUsuario);
usuarioRouter.post('/', adicionarUsuario);
usuarioRouter.delete('/:email', removerUsuario);

module.exports = usuarioRouter;