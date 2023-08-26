import { collection, getDoc, doc } from 'firebase/firestore';

import createDataContext from './createDataContext';
import { db } from '../services/firebaseConfig';

const playersCollectionRef = collection(db, 'players');
const scoresReducer = (state, action) => {
	switch (action.type) {
		case 'get_Scores':
			return action.payload;
		case 'win':
			return {
				...state,
				[action.payload]: {
					...state[action.payload],
					win: state[action.payload].win + 1,
				},
			};
		case 'draw':
			return {
				...state,
				[action.payload]: {
					...state[action.payload],
					draw: state[action.payload].draw + 1,
				},
			};
		case 'loss':
			return {
				...state,
				[action.payload]: {
					...state[action.payload],
					loss: state[action.payload].loss + 1,
				},
			};
		case 'reset':
			return { ...state, [action.payload]: { win: 0, draw: 0, loss: 0 } };
		default:
			return state;
	}
};

const win = (dispatch) => {
	return (gameMode, id) => {
		dispatch({ type: 'win', payload: gameMode });
	};
};

const draw = (dispatch) => {
	return (gameMode) => {
		dispatch({ type: 'draw', payload: gameMode });
	};
};

const loss = (dispatch) => {
	return (gameMode) => {
		dispatch({ type: 'loss', payload: gameMode });
	};
};

const reset = (dispatch) => {
	return (gameMode) => {
		dispatch({ type: 'reset', payload: gameMode });
	};
};

const getScores = (dispatch) => {
	return async (id) => {
		try {
			const playerDocRef = doc(playersCollectionRef, id);
			const playerDocSnapshot = await getDoc(playerDocRef);
			dispatch({ type: 'get_Scores', payload: playerDocSnapshot.data() });
		} catch (error) {
			console.error(error);
		}
	};
};

export const { Provider, Context } = createDataContext(
	scoresReducer,
	{ win, loss, draw, reset, getScores },
	{
		Basic: { win: 0, loss: 0, draw: 0 },
		Advance: { win: 0, loss: 0, draw: 0 },
	}
);
