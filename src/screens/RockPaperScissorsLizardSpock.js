import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ScoreBoard from '../components/ScoreBoard';
import Selection from '../components/Selection';
import ControlPanel from '../components/ControlPanel';
import useScreenWidth from '../hooks/useScreenWidth';
import { colours } from '../utils/Styles';

const RockPaperScissorsLizardSpock = () => {
	const [screenWidth] = useScreenWidth();

	return (
		<SafeAreaView style={styles.container}>
			<ScoreBoard
				src={require('../../assets/images/logo-bonus.png')}
				size={screenWidth * 0.2}
				gameMode='Advance'
			/>
			<Selection size={screenWidth} gameMode='Advance' />
			<ControlPanel modeTitle='BASIC MODE' />
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
