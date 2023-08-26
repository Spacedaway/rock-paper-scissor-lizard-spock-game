import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import MyAppText from './MyAppText';
import { colours, spacing } from '../utils/Styles';

const Button = ({
	title,
	onPressNavigate,
	style = {},
	bgClr = null,
	brClr = colours.lightGray,
}) => {
	return (
		<View
			style={[
				{ backgroundColor: bgClr, borderColor: brClr },
				styles.container,
			]}
		>
			<TouchableOpacity onPress={onPressNavigate}>
				<MyAppText styles={style}>{title}</MyAppText>
			</TouchableOpacity>
		</View>
	);
};

export default Button;

const styles = StyleSheet.create({
	container: {
		borderWidth: 2,
		borderRadius: spacing.sm,
		paddingHorizontal: spacing.xl,
		paddingVertical: spacing.sm,
	},
});
