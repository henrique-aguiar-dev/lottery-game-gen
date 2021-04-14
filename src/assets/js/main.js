import { Game } from '../../modules/game_generator.js';

//-------------Main functions----------
const form = document.querySelector('.form');
const btnCopy = document.querySelector('.copy');

const showGames = allGames => {
	document.querySelector('.result').style.display = 'block';
	const displayGames = document.querySelector('.jogos');
	const displayComb = document.querySelector('.combinacoes');

	displayGames.innerHTML = '';
	displayComb.innerHTML = '';

	allGames.main.forEach(eachGame => displayGames.innerHTML += `<p>${eachGame}</p>`);
	allGames.comb.forEach(eachGame => displayComb.innerHTML += `<p>${eachGame}</p>`);

	document.querySelector('.copy').style.display = 'inline-block';
}

const createGames = () => {
	const type = document.querySelector('#game-type').value;
	const games = document.querySelector('#games').value;

	if (!type) return;
	const game = new Game(type, games);
	const allGames = game.generateGames();

	showGames(allGames);
}

const copyAll = () => {
	let content = document.querySelector('.result').innerText;
	navigator.clipboard.writeText(content).then(
		alert('Apostas copiadas. Cole (Ctrl + v) num documento e salve.')
	);
}

btnCopy.addEventListener('click', () => copyAll());

form.addEventListener('submit', e => {
	e.preventDefault();
	createGames();
})
