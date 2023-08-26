import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ScoreBoard from '../components/ScoreBoard';
import Selection from '../components/Selection';
import ControlPanel from '../components/ControlPanel';
import useScreenWidth from '../hooks/useScreenWidth';
import { colours } from '../utils/Styles';

const RockPaperScissorsLizardSpock = () => {
	const [screenWidth] = useScreenWidth();

	clearAll = async () => {
		try {
			// await AsyncStorage.clear();
			const something = await AsyncStorage.getItem('token');
			console.log(something);
		} catch (e) {
			console.error(e);
		}
		// console.log('Done.');
	};
	clearAll();

	return (
		<SafeAreaView style={styles.container}>
			<ScoreBoard
				src={require('../../assets/images/logo-bonus.png')}
				size={screenWidth * 0.2}
				gameMode='Advance'
			/>
			<Selection size={screenWidth} gameMode='Advance' />
			<ControlPanel modeTitle='BASIC MODE' gameMode='Advance' />
		</SafeAreaView>
	);
};

export default RockPaperScissorsLizardSpock;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colours.background,
		alignItems: 'center',
	},
});
