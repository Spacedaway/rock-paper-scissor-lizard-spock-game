import createDataContext from './createDataContext';

const scoresReducer = (state, action) => {
	switch (action.type) {
		case value:
			break;
		default:
			return state;
	}
};

export const { Provider, Context } = createDataContext({
	scoresReducer,
});
