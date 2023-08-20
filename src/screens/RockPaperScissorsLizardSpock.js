import { StyleSheet, Dimensions, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import ScoreBoard from '../components/ScoreBoard';
import Selection from '../components/Selection';
import ControlPanel from '../components/ControlPanel';

const RockPaperScissorsLizardSpock = () => {
	const screenWidth = Math.floor(Dimensions.get('window').width);

	return (
		<SafeAreaView style={styles.container}>
			<ScoreBoard
				src={require('../../assets/images/logo-bonus.png')}
				size={screenWidth * 0.2}
			/>
			<Selection size={screenWidth} />
			<ControlPanel />
		</SafeAreaView>
	);
};

export default RockPaperScissorsLizardSpock;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'hsl(214, 47%, 23%)',
		// backgroundColor: 'white',
		alignItems: 'center',
	},
});
