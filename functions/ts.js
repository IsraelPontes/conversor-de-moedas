import { coins } from '../server/dataCoins.js'; // Importa o array alunos do módulo teste.js

coins.forEach(function (coin) {
    if (coin.nome === "Real") {
        console.log("Esta moeda é o Real");
    }
    // console.log(`Nome: ${aluno.nome}, Idade: ${aluno.idade}`);
});