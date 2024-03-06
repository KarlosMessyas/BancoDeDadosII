const sequelize = require('../database/sequelize');
const { DataTypes } = require('sequelize');

const Usuario = sequelize.define('Usuario', {
    // Model attributes are defined here
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        primaryKey: true
        // allowNull defaults to true
    },
    nascimento: {
        type: DataTypes.DATE,
        allowNull: false
    }

}, {
    // Other model options go here
});

async function sincronizar() {
    await Usuario.sync();
    console.log("Sincronizado");
}

sincronizar();

module.exports = Usuario;