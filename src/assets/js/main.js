import { Game } from '../../modules/game_generator.js';

//-------------Main functions----------
const form = document.querySelector('.form');

const showGames = allGames => {
	document.querySelector('.result').style.display = 'block';
	const displayGames = document.querySelector('.jogos');
	const displayComb = document.querySelector('.combinacoes');

	displayGames.innerHTML = '';
	displayComb.innerHTML = '';
	
	allGames.main.forEach(eachGame => displayGames.innerHTML += `<p>${eachGame}</p>`);
	allGames.comb.forEach(eachGame => displayComb.innerHTML += `<p>${eachGame}</p>`);
}

const createGames = () => {
	const type = document.querySelector('#game-type').value;
	const games = document.querySelector('#games').value;

	if (!type) return;
	const game = new Game(type, games);
	const allGames = game.generateGames();

	//console.log(allGames)
	showGames(allGames);
}

form.addEventListener('submit', e => {
	e.preventDefault();
	createGames();
})

//!!!!!!!!!!!!!!TESTES!!!!!!!!!!!!!!!!!!!!

