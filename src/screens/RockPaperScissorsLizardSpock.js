import { StyleSheet, Dimensions, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import BackgroundImage from '../components/BackgroundImage';
import MyAppText from '../components/MyAppText';
import ScoreBoard from '../components/ScoreBoard';

const RockPaperScissorsLizardSpock = () => {
	const screenWidth = Math.floor(Dimensions.get('window').width);

	return (
		<SafeAreaView style={styles.container}>
			<ScoreBoard
				src={require('../../assets/images/logo-bonus.png')}
				size={screenWidth * 0.2}
			/>
			<View style={{ justifyContent: 'center', alignItems: 'center' }}>
				<BackgroundImage
					size={screenWidth * 0.6}
					src={require('../../assets/images/bg-pentagon.png')}
				/>
			</View>
			<MyAppText size={40}>RockPaperScissorsLizardSpock</MyAppText>
		</SafeAreaView>
	);
};

export default RockPaperScissorsLizardSpock;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'hsl(214, 47%, 23%)',
		alignItems: 'center',
		// justifyContent: 'center',
	},
});
