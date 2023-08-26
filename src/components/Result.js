import React from 'react';
import { StyleSheet, View } from 'react-native';

import MyAppText from './MyAppText';
import Button from './Button';
import { colours, fontSizes, fontWeight, spacing } from '../utils/Styles';

const Result = ({ outcome, callback, visible }) => {
	return (
		<View style={[styles.container, { display: visible }]}>
			<MyAppText styles={styles.outcome}>{outcome}</MyAppText>
			<Button
				title='PLAY AGAIN'
				brClr={colours.white}
				bgClr={colours.white}
				style={{
					color: colours.DeepScoreText,
					fontSize: fontSizes.lg,
				}}
				onPressNavigate={callback}
			/>
		</View>
	);
};

export default Result;

const styles = StyleSheet.create({
	container: {
		marginTop: spacing.xxxl,
		gap: spacing.sm,
	},
	outcome: {
		fontSize: fontSizes.xxl,
		color: colours.white,
		textAlign: 'center',
		fontWeight: fontWeight.bold,
	},
});
