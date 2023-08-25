import { StyleSheet, View } from 'react-native';
import React from 'react';
import MyAppText from './MyAppText';
import Button from './Button';
import useCustomNavigation from '../hooks/useCustomNavigation';

const Result = ({ outcome, callback, visible }) => {
	return (
		<View style={[styles.container, { display: visible }]}>
			<MyAppText size={50}>{outcome}</MyAppText>
			<Button
				title='PLAY AGAIN'
				brColour='white'
				bgColour='white'
				txtclr='hsl(229, 25%, 31%)'
				txtsz={25}
				onPressNavigate={callback}
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
