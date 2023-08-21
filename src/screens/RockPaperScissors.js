import { Image, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import ScoreBoard from '../components/ScoreBoard';
import Selection from '../components/Selection';
import ControlPanel from '../components/ControlPanel';
import useScreenWidth from '../hooks/useScreenWidth';

const RockPaperScissors = () => {
	const [screenWidth] = useScreenWidth();

	return (
		<SafeAreaView style={styles.container}>
			<ScoreBoard
				src={require('../../assets/images/logo.png')}
				size={screenWidth * 0.2}
			/>
			<Selection size={screenWidth} />
			<ControlPanel modeTitle='ADVANCE MODE' />
		</SafeAreaView>
	);
};

export default RockPaperScissors;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'hsl(214, 47%, 23%)',
		// backgroundColor: 'white',
		alignItems: 'center',
	},
});
