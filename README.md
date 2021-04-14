# lottery-game-gen 1.2.0
*************************************VANILLA JAVASCRIPT*******************************************
* -------------------Training project / projeto de treinamento----------------------------
*
* -------------Lottery game generator / Gerador de jogos para loterias--------------------
* By: Henrique, L. - https://github.com/ApiLogik
* 
* https://apilogik.github.io/lottery-game-gen/
*
* Version: 1.2.0
*
* ----------------------------------------ENG---------------------------------------------
*
* Developed based on the official Brazilian lotteries;
*
* Possible to change business rules to fit different lottery types;
*
* Testing with just one rule to generate combinations. Possible further implementation of 
* other rules for more types of combinations;
* 
* ----------------------------------------PT-BR-------------------------------------------
* 
* Desenvolvido com base nas loterias oficiais da Caixa Econômica Federal - Brasil;
*
* Possível alterar as regras de negócio para se ajustar a diferentes tipos de loterias;
*
* Testando com apenas uma lógica para combinações. Possível implementação posterior de outras
* regras para mais tipos de combinações;
*
*
* ----------------------------------------Versions----------------------------------------
* 1.0.0 - Generate combinations by splitting half of each game:
* Demo: game1 [x, x, x, o, o, o], game2 [x, x, x, o, o, o] = comb1 [o, o, o, o, o, o]
*
* 1.2.0 - Added one more combination type (only 6 numbers games, for now): 2 by 2: Split all games in groups of 3 elements,
* then get 2 elements of each game;
* Demo: game1 [o, o, x, x, x, x], game2 [x, x, o, o, x, x], game3 [x, x, x, x, o, o] = comb1 [o, o, o, o, o, o]
