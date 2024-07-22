const verificaLogin = require('./verificaLogin');

let button = document.querySelector("#button");
let body = document.querySelector("body");

button.addEventListener("click", function () {
    let nome = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let nascimento = document.querySelector("#nascimento").value;
    let testName = verificaLogin.verificarNome(nome);
    if (testName == 1) {
        window.alert("Insira um nome válido!");
    }
});