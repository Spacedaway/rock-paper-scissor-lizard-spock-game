import { StyleSheet, View } from 'react-native';
import React from 'react';
import MyAppText from './MyAppText';

const Scores = ({ bgClr = 'hsl(237, 49%, 15%)', txtclr = 'white', title }) => {
	return (
		<View style={[styles.container, { backgroundColor: bgClr }]}>
			<MyAppText textColour={txtclr} size={15}>
				{title}
			</MyAppText>
			<MyAppText textColour="color: 'hsl(229, 25%, 31%)'" size={30}>
				0
			</MyAppText>
		</View>
	);
};

export default Scores;

const styles = StyleSheet.create({
	container: {
		borderRadius: 8,
		width: 80,
		paddingTop: 5,
	},
});
