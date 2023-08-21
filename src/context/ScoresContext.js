import createDataContext from './createDataContext';

const scoresReducer = (state, action) => {
	switch (action.type) {
		case 'win':
			return {
				...state,
				[action.payload]: {
					...state[action.payload],
					win: state[action.payload].win + 1,
				},
			};
		case 'draw':
			return state;
		case 'loss':
			return {
				...state,
				[action.payload]: {
					...state[action.payload],
					win: state[action.payload].win - 1,
				},
			};
		default:
			return state;
	}
};

const win = (dispatch) => {
	return (gameMode) => {
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

export const { Provider, Context } = createDataContext(
	scoresReducer,
	{ win, loss, draw },
	{
		Basic: { win: 0, loss: 1, draw: 0 },
		Advance: { win: 0, loss: 2, draw: 0 },
	}
);
