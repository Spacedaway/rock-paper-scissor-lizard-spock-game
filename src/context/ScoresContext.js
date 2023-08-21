import createDataContext from './createDataContext';

const scoresReducer = (state, action) => {
	switch (action.type) {
		case value:
			break;
		default:
			return state;
	}
};

const win = (dispatch) => {
	return (basicMode) => {
		basicMode
			? dispatch({ type: 'basic_win' })
			: dispatch({ type: 'basic_win' });
	};
};

export const { Provider, Context } = createDataContext({
	scoresReducer,
});
