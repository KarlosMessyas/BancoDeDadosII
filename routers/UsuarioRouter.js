const express = require('express');
const usuarioRouter = express.Router();

const { listarUsuarios, buscarUsuario, criarUsuario, removerUsuario, atualizarUsuario } = require('../controller/UsuarioController');

usuarioRouter.get('/', listarUsuarios);
usuarioRouter.get('/:email', buscarUsuario);
usuarioRouter.post('/', criarUsuario);
usuarioRouter.delete('/:email', removerUsuario);
usuarioRouter.patch('/:email', atualizarUsuario);

module.exports = usuarioRouter;