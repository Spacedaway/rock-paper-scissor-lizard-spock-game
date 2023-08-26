import React from 'react';
import { StyleSheet, View } from 'react-native';

import MyAppText from './MyAppText';
import { spacing } from '../utils/Styles';

const Scores = ({ titleStyle, scoreStyle, bgclr, value, title }) => {
	return (
		<View style={[{ backgroundColor: bgclr }, styles.container]}>
			<MyAppText styles={titleStyle}>{title}</MyAppText>
			<MyAppText styles={scoreStyle}>{value}</MyAppText>
		</View>
	);
};

export default Scores;

const styles = StyleSheet.create({
	container: {
		borderRadius: spacing.sm,
		width: spacing.xxxl,
		paddingTop: spacing.sm,
	},
});
