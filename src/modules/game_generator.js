/*
* -------------Lottery game generator / Gerador de jogos para loterias---
* By: Henrique, L. - https://github.com/ApiLogik
* Developed based on the official Brazilian lotteries
* Desenvolvido com base nas loterias oficiais da Caixa Econômica Federal
* -------------------Training project-----------------------------------
*/

//---------Classes----------------
export class Game {
	constructor(type, games) {
		this.type = Number(type); //Type of game selectors [1 - 5]
		this.games = games;
		this.mainGames = [];
		this.allComb = [];
		this.min = 1;
		this.allGames = {
			main: null,
			comb: null
		};

		//According to the game option received by the selectors
		switch (this.type) {
			case 1:
				this.limit = 6;
				this.max = 61;
				break;
			case 2:
				this.limit = 6;
				this.max = 51;
				break;
			case 3:
				this.limit = 15;
				this.max = 26;
				break;
			case 4:
				this.limit = 5;
				this.max = 81;
				break;
			case 5:
				this.limit = 50;
				this.min = 0;
				this.max = 100;
				break;
		}
	}

	_addZeroLeft(number) {
		if (number >= 10) { return number } else { return `0${number}` };
	}

	//Generate each game sequence and add zero to the left if < 10;
	_generateSequence() {
		this.actualGame = [];
		for (let i = 0; i < this.limit; i++) {
			let number = Math.floor(Math.random() * (this.max - this.min) + this.min).toString();
			number = this._addZeroLeft(number);
			!this.actualGame.includes(number) ? this.actualGame.push(number) : i--;
			this.actualGame.sort((a, b) => a - b);
		}
	}

	//Mount the combinations by splitting each game, reversing the order (up/down) and concatenating again;
	_generateHalfComb() {
		const arrPart1 = [];
		const arrPart2 = [];
		const slicer = Math.ceil(this.limit / 2);
		let arrPart2Temp = [];
		let part1;
		let part2;
		let sizePart2;

		for (let index in this.mainGames) {
			part1 = this.mainGames[index].slice(0, slicer);
			part2 = this.mainGames[index].slice(slicer, this.limit);
			arrPart1.push(part1);
			arrPart2Temp.push(part2);
		}

		sizePart2 = arrPart2Temp.length - 1;

		arrPart2Temp.map((_value, _index, arr) => {
			arrPart2.push(arr[sizePart2]);
			if (sizePart2 > 0) sizePart2--;
		});

		/*
		* Repeated numbers = no concatenation; discard combination;
		* Other options can be implemented (e.g: change the number or random combinations);
		*/
		for (let i = 0; i < arrPart1.length; i++) {
			if (!arrPart1[i].find(value => arrPart2[i].includes(value))) {
				this.actualComb = arrPart1[i].concat(arrPart2[i]).sort((a, b) => a - b);
				this.allComb.push(this.actualComb);
			}
		}
	}

	_generate2by2Comb() {
		const gamesLength = this.games - (this.games % 3);//Array length divisible by 3 - each comb need 3 games

		//Get 2 elements of each game - [o, o, x, x, x, x], [x, x, o, o, x, x], [x, x, x, x, o, o]
		const combGen = group => {
			let actualComb = [];
			let cut = 0;
			for (let i = 0; i < 3; i++) {
				actualComb.push(group[i].slice(cut, cut + 2));
				cut < 4 ? cut += 2 : cut = 0;
			}
			/*
			* Repeated numbers = no concatenation; discard combination;
			*/
			let match1w2 = actualComb[0].find(value => actualComb[1].includes(value));
			let match2w3 = actualComb[1].find(value => actualComb[2].includes(value));

			if (!match1w2 && !match2w3) {
				this.allComb.push(actualComb[0].concat(actualComb[1], actualComb[2]))
			}
		}

		//Split all games in groups of 3 elements
		for (let groupSize = 3; groupSize <= gamesLength; groupSize += 3) {
			combGen(this.mainGames.slice(groupSize - 3, groupSize))
		}

	}

	_stringfyAndFormat(arrToStr) {
		arrToStr = arrToStr.forEach((each, index) => {
			arrToStr[index] = each.join(' ');
		})
	}

	_filterRepeated(mainGames, allComb) {
		allComb.find((value, index) => {
			if (mainGames.includes(value)) {
				allComb = allComb.splice(index, 1);
			}
		})
	}

	//Main method - calls the sequences and combinations generators; stringfy & format; returns a 'allGames' object
	generateGames() {
		for (let i = 0; i < this.games; i++) {
			this._generateSequence()
			this.mainGames.push(this.actualGame);
		}

		this.mainGames.length > 1 ? this._generateHalfComb() : false;
		this.mainGames.length > 2 && this.limit === 6 ? this._generate2by2Comb() : false;

		this._stringfyAndFormat(this.mainGames);
		this._stringfyAndFormat(this.allComb);
		this._filterRepeated(this.mainGames, this.allComb);

		this.allGames.main = this.mainGames;
		this.allGames.comb = this.allComb;

		return this.allGames;
	}

}//end - class Game
