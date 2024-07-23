import { alunos } from '../server/dataCoins.js'; // Importa o array alunos do módulo teste.js

alunos.forEach(function (aluno) {
    if (aluno.nome === "Maria") {
        console.log("Olá, sou a Maria");
    }
    // console.log(`Nome: ${aluno.nome}, Idade: ${aluno.idade}`);
});