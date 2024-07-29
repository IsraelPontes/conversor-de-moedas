# Conversor de Moedas

Este projeto é um conversor de moedas básico desenvolvido como parte de um desafio proposto pela equipe da Dev Club e @Rodolfo Mori.

## Objetivo

O objetivo principal deste projeto é fornecer uma aplicação educacional para converter nossa moeda para outras quatro moedas. Originalmente, os valores dessas moedas eram fixos.

## Desenvolvimento

Durante o desenvolvimento, o foco principal era apresentar conceitos fundamentais como:
- Aplicação da lógica
- Uso de funções
- Uso da estrutura if
- Interações com a DOM

## Ajustes e Mudanças

Este projeto passou por algumas atualizações importantes conforme adquiri novos conhecimentos. Recentemente, integrei uma API que fornece o valor de três moedas (USD, EUR e BTC), o que tornou a aplicação mais útil.

### Mudanças Implementadas

1. **Pasta `server`**: 
   - `server.js`: Contém o link da API.
   - `dataCoins.js`: Inclui um array de objetos com informações adicionais que não estão na API. Ambos arquivos são exportados para uso no arquivo principal.

2. **Funções de Cálculo**:
   - Criei uma pasta separada para funções de cálculos.
   - Uma função utiliza `dataCoins` para identificar o logo da moeda usando `forEach`, e estas funções também são exportadas para uso no arquivo principal.

3. **Estrutura de Código**:
   - No arquivo principal, utilizei `Object.keys()` para retornar um array de um objeto e utilizá-lo em estruturas de repetição, como `forEach`.
   - Reestruturei as pastas com base na estrutura de pastas do React.

## Sugestões

Se alguém analisar o código e quiser dar feedback, fique à vontade. O feedback de desenvolvedores mais experientes nos ajuda a pensar de forma mais objetiva e a adquirir novos conhecimentos, além de aprimorar os já adquiridos. 

## Agradecimentos

Sou muito grato por este projeto e empolgado para o próximo desafio!