export default Outcomes = {
	scissors: {
		spock: 'lose',
		rock: 'lose',
		paper: 'win',
		lizard: 'win',
	},
	spock: {
		paper: 'lose',
		lizard: 'lose',
		scissors: 'win',
		rock: 'win',
	},
	paper: {
		scissors: 'lose',
		lizard: 'lose',
		rock: 'win',
		spock: 'win',
	},
	lizard: {
		scissors: 'win',
		rock: 'win',
		paper: 'win',
		spock: 'lose',
	},
	rock: {
		spock: 'lose',
		paper: 'lose',
		lizard: 'lose',
		scissors: 'win',
	},
};
