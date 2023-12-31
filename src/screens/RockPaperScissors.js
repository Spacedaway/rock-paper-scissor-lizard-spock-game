import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ScoreBoard from '../components/ScoreBoard';
import Selection from '../components/Selection';
import ControlPanel from '../components/ControlPanel';
import useScreenWidth from '../hooks/useScreenWidth';
import { colours } from '../utils/Styles';

const RockPaperScissors = () => {
	const [screenWidth] = useScreenWidth();

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar backgroundColor={colours.background} />

			<ScoreBoard
				src={require('../../assets/images/logo.png')}
				size={screenWidth * 0.2}
				gameMode='Basic'
			/>
			<Selection size={screenWidth} gameMode='Basic' />
			<ControlPanel modeTitle='ADVANCE MODE' gameMode='Basic' />
		</SafeAreaView>
	);
};

export default RockPaperScissors;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colours.background,
		alignItems: 'center',
	},
});
