const Usuario = require('../model/Usuario');

const listarUsuarios = async (req, res) => {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
};

const buscarUsuario = async (req, res) => {
    const usuario = await Usuario.findByPk(req.params.email);

    if (usuario === null) {
        res.status(404).json({ erro: "Usuário não encontrado" });
        return;
    }

    res.json(usuario);
}

const criarUsuario = async (req, res) => {
    // console.log(req.body);
    try {
        const usuario = await Usuario.create(req.body);
        res.status(201).json(usuario);
        return;
    } catch (exception) {
        res.status(400).json({ erro: exception.message });
        return;
    }
}

const removerUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findByPk(req.params.email);
        if (!usuario) {
            res.status(404).json({ erro: "Usuário não encontrado" });
            return;
        }
        await Usuario.destroy({ where: { email: req.params.email } });
        res.status(201).json(usuario);
        return;
    }
    catch (exception) {
        console.error(exception);
        res.status(500).json({ erro: "Erro interno do servidor" });
    }
}

const atualizarUsuario = async (req, res) => {
    const usuario = await Usuario.findByPk(req.params.email);
    if (!usuario) {
        res.status(404).json({ erro: "Usuário não encontrado" });
        return;
    }
    else {
        Usuario.update(req.body);
        res.status(200).json({ message: 'Usuário atualizado com sucesso.' });
        return;
    }
}

module.exports = { listarUsuarios, buscarUsuario, criarUsuario, removerUsuario, atualizarUsuario };

// async function criarUsuario(usuario) {
//     await Usuario.create(usuario);
//     console.log("Usuário criado");
// }

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