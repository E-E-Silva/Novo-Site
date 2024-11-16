// var nome = window.prompt("Qual seu nome?")
// window.alert("É um grande prazer te conhecer," + nome + "!" );
// var numero = Number(window.prompt("Me INFORME UM NÚMERO"));
// var numero2 = Number(window.prompt("Me informe o segundo número"));
// var soma = numero += numero2;
// alert("A soma dos números informados é" + soma + ":D")

function criarConta() {
    document.getElementById('criarConta').classList.remove('ativo');
    document.getElementById('loginConta').classList.add('ativo');
}

function login() {
    document.getElementById('loginConta').classList.remove('ativo');
    document.getElementById('criarConta').classList.add('ativo');
}
