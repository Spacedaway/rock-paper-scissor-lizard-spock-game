import { useContext, useRef, useState } from 'react';

import { Context as ScoresContext } from '../context/ScoresContext';
import Outcomes from '../utils/Outcomes';

const useGamePlayHandler = (userChoice, gameMode) => {
	const { win, loss, draw } = useContext(ScoresContext);
	const [outcome, setOutcome] = useState('');
	const allChoices =
		gameMode === 'Basic'
			? ['scissors', 'rock', 'paper']
			: ['scissors', 'rock', 'paper', 'lizard', 'spock'];
	const setHouseChoice = useRef(
		allChoices[Math.floor(Math.random() * allChoices.length)]
	);
	const houseChoice = setHouseChoice.current;

	const getOutcome = () => {
		if (userChoice === houseChoice) {
			draw(gameMode);
			setOutcome('DRAW');
			return 'draw';
		} else if (Outcomes[userChoice][houseChoice] === 'win') {
			win(gameMode);
			setOutcome('YOU WIN');
			return 'win';
		} else {
			loss(gameMode);
			setOutcome('YOU LOSE');
			return 'lose';
		}
	};

	return [houseChoice, getOutcome, outcome];
};

export default useGamePlayHandler;
