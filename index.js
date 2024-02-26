const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// const Usuario = require('./model/Usuario');

// async function criarUsuario(usuario) {
//     await Usuario.create(usuario);
//     console.log("Usuário criado");
// }

// // criarUsuario({
// //     nome: "Karlos",
// //     email: "joao@gmail.com",
// //     nascimento: "2000-01-01"
// // })

// // Find all users
// async function listarUsuarios() {
//     const usuarios = await Usuario.findAll();
//     console.log(JSON.stringify(usuarios));
// }

// listarUsuarios();

// async function buscarUsuario(email){
//     const usuario = await Usuario.findByPk(email);
//     console.log(JSON.stringify(usuario));
// }

// // buscarUsuario("karlos@gmail.com");

// async function atualizarUsuario(email, nome){
//     const usuario = await Usuario.findByPk(email);
//     usuario.nome = nome;
//     await usuario.save();
//     console.log("Usuário atualizado");
// }

// // atualizarUsuario("joao@gmail.com", "João da Silva");

// async function deletarUsuario(email){
//     const usuario = await Usuario.findByPk(email);
//     await usuario.destroy(usuario);
//     console.log("Usuário deletado");
// }

// // deletarUsuario("joao@gmail.com");