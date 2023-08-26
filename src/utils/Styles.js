export const fontSizes = {
	sm: 8,
	md: 16,
	lg: 24,
	xl: 32,
	xxl: 40,
	xxxl: 80,
};

export const spacing = {
	sm: 8,
	md: 16,
	lg: 24,
	xl: 32,
	xxl: 40,
	xxxl: 80,
};

export const fontWeight = {
	default: 600,
	bold: 700,
};

export const colours = {
	background: 'hsl(214, 47%, 23%)',
	DeepScoreText: 'hsl(229, 25%, 31%)',
	lightScoreText: 'hsl(229, 64%, 46%)',
	lightGray: 'hsl(217, 16%, 45%)',
	deepBlue: 'hsl(237, 49%, 15%)',
	lighterBlue: 'hsl(229, 25%, 31%)',
	white: 'hsl(0, 0%, 100%)',
};

export const optionStyles = {
	scissors: {
		top: 75,
		left: 60,
		shadowColor: 'hsl(39, 89%, 49%)',
		borderColor: 'hsl(40, 84%, 53%)',
		iconPath: require('../../assets/images/icon-scissors.png'),
	},
	paper: {
		top: 155,
		right: -55,
		shadowColor: 'hsl(230, 89%, 62%) ',
		borderColor: 'hsl(230, 89%, 65%)',
		iconPath: require('../../assets/images/icon-paper.png'),
	},
	rock: {
		top: 295,
		right: -10,
		shadowColor: 'hsl(349, 71%, 52%)',
		borderColor: 'hsl(349, 70%, 56%)',
		iconPath: require('../../assets/images/icon-rock.png'),
	},
	lizard: {
		top: 295,
		left: -10,
		shadowColor: 'hsl(261, 73%, 60%)',
		borderColor: 'hsl(261, 72%, 63%)',
		iconPath: require('../../assets/images/icon-lizard.png'),
	},
	spock: {
		top: 155,
		left: -55,
		shadowColor: 'hsl(189, 59%, 53%)',
		borderColor: 'hsl(189, 58%, 57%)',
		iconPath: require('../../assets/images/icon-spock.png'),
	},
	default: {
		borderColor: 'hsl(227, 48%, 16%)',
		backgroundColor: 'hsl(227, 48%, 16%)',
	},
};

export const pickStyles = {
	reset: {
		top: null,
		left: null,
		right: null,
		position: null,
	},
};

export const basicOptions = {
	scissors: {
		top: 75,
		left: 175,
	},
	paper: {
		top: 75,
		right: 175,
	},
	rock: {
		top: 285,
		right: 60,
	},
};
