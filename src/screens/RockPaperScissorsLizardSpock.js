import { StyleSheet, Text, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import BackgroundImage from '../components/BackgroundImage';

const RockPaperScissorsLizardSpock = () => {
	const screenWidth = Math.floor(Dimensions.get('window').width * 0.6);

	return (
		<SafeAreaView style={styles.container}>
			<BackgroundImage
				size={screenWidth}
				src='../../assets/images/bg-pentagon.png'
			/>
			<Text>RockPaperScissorsLizardSpock</Text>
		</SafeAreaView>
	);
};

export default RockPaperScissorsLizardSpock;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'hsl(214, 47%, 23%)',
		justifyContent: 'center',
		alignItems: 'center',
	},
});
