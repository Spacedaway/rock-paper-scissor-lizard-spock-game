import AsyncStorage from '@react-native-async-storage/async-storage';

import createDataContext from './createDataContext';
import { navigate } from '../services/navigationRef';
import { db } from '../services/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const playersCollectionRef = collection(db, 'players');
const authReducer = (state, action) => {
	switch (action.type) {
		case 'add_error':
			return { ...state, errorMessage: action.payload };
		case 'loading':
			return { ...state, loading: action.payload };
		case 'signin':
			return { token: action.payload, errorMessage: null };
		default:
			return state;
	}
};

const localSignin = (dispatch) => {
	return (token) => {
		dispatch({ type: 'signin', payload: token });
		navigate('ClassicOrAdvance');
	};
};

const signUp = (dispatch) => {
	return async () => {
		try {
			dispatch({ type: 'loading', payload: true });
			const newPlayerRef = await addDoc(playersCollectionRef, {
				Basic: { win: 0, loss: 0, draw: 0 },
				Advance: { win: 0, loss: 0, draw: 0 },
			});
			await AsyncStorage.setItem('token', newPlayerRef.id);
			dispatch({ type: 'signin', payload: newPlayerRef.id });
			navigate('ClassicOrAdvance');
		} catch (err) {
			dispatch({
				type: 'add_error',
				payload: 'Oops something went wrong',
			});
		} finally {
			dispatch({ type: 'loading', payload: false });
		}
	};
};

export const { Provider, Context } = createDataContext(
	authReducer,
	{ signUp, localSignin },
	{
		token: null,
		errorMessage: '',
		loading: false,
	}
);
