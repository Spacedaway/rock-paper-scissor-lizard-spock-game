import { StyleSheet, View } from 'react-native';
import React from 'react';
import MyAppText from './MyAppText';
import Button from './Button';

const Result = ({ outcome }) => {
	return (
		<View style={styles.container}>
			<MyAppText size={50}>YOU WIN</MyAppText>
			<Button
				title='PLAY AGAIN'
				brColour='white'
				bgColour='white'
				txtclr='hsl(229, 25%, 31%)'
				txtsz={25}
			/>
		</View>
	);
};

export default Result;

const styles = StyleSheet.create({
	container: {
		marginTop: 60,
		gap: 10,
	},
});
