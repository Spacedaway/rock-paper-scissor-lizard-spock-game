import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext, useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { db } from '../services/firebaseConfig';
import { getDoc, doc, collection } from 'firebase/firestore';

import MyAppText from '../components/MyAppText';
import Button from '../components/Button';
import { Context as AuthContext } from '../context/AuthContext';
import { Context as ScoresContext } from '../context/ScoresContext';
import { colours, fontSizes, spacing } from '../utils/Styles';

const Initial = () => {
	const { getScores } = useContext(ScoresContext);
	const {
		signUp,
		localSignin,
		state: { loading, errorMessage },
	} = useContext(AuthContext);
	const [isSignedIn, setIsSignedIn] = useState(false);
	const playersCollectionRef = collection(db, 'players');

	useEffect(() => {
		const tryLocalSignin = async () => {
			const token = await AsyncStorage.getItem('token');
			if (token) {
				try {
					// Check if the token exists in the Firestore database
					const playerDoc = await getDoc(doc(playersCollectionRef, token));
					if (playerDoc.exists()) {
						await getScores(token);
						localSignin(token);
					} else {
						setIsSignedIn(true);
						return;
					}
				} catch (error) {
					console.error('Error checking player existence:', error);
				}
			}
			setIsSignedIn(true);
		};
		tryLocalSignin();
	}, []);

	if (!isSignedIn) {
		return <ActivityIndicator size='large' style={styles.loading} />;
	}

	return (
		<SafeAreaView style={styles.container}>
			<MyAppText styles={styles.text}>
				Welcome to Rock Paper Scissor Spock Lizard Game
			</MyAppText>
			{loading ? (
				<ActivityIndicator size='large' style={{ marginBottom: 5 }} />
			) : null}
			<Button
				title="LET'S PLAY!"
				style={styles.button}
				onPressNavigate={signUp}
			/>
			{errorMessage ? (
				<MyAppText
					styles={{
						fontSize: fontSizes.md,
						color: 'red',
						marginTop: spacing.md,
					}}
				>
					{errorMessage}
				</MyAppText>
			) : null}
		</SafeAreaView>
	);
};

export default Initial;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colours.background,
		gap: spacing.md,
	},
	text: {
		color: colours.white,
		fontSize: fontSizes.xxl,
		textAlign: 'center',
	},
	button: {
		color: colours.white,
		fontSize: fontSizes.lg,
		textAlign: 'center',
	},
	loading: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colours.background,
	},
});
