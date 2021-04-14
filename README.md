# lottery-game-gen 1.2.0
*************************************VANILLA JAVASCRIPT*******************************************
* -------------------Training project / projeto de treinamento----------------------------
*
* -------------Lottery game generator / Gerador de jogos para loterias--------------------
* By: Henrique, L. - https://github.com/ApiLogik
* 
* https://apilogik.github.io/lottery-game-gen/
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
* Demo: gameN [x, x, x, o, o, o], gameN [x, x, x, o, o, o] = comb [o, o, o, o, o, o]
*
* 1.2.0 - Added one more combination type: 2 by 2: Split all games in groups of 3 elements,
* then get 2 elements of each game;
* Demo: gameN [o, o, x, x, x, x], gameN [x, x, o, o, x, x], gameN [x, x, x, x, o, o] = comb [o, o, o, o, o, o]
