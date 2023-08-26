import React from 'react';
import { StyleSheet, View } from 'react-native';

import Option from './Option';
import useScreenWidth from '../hooks/useScreenWidth';
import MyAppText from './MyAppText';
import {
	colours,
	fontSizes,
	fontWeight,
	optionStyles,
	spacing,
} from '../utils/Styles';

const UserHouseOptions = ({ option, reset, title }) => {
	const [screenWidth] = useScreenWidth();

	return (
		<View style={styles.container}>
			<Option
				size={screenWidth * 0.3}
				icon={optionStyles[option].iconPath}
				optionStyle={optionStyles[option]}
				pickStyle={reset}
			/>
			<MyAppText styles={styles.option}>{title}</MyAppText>
		</View>
	);
};

export default UserHouseOptions;

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		gap: spacing.lg,
	},
	option: {
		color: colours.white,
		fontWeight: fontWeight.bold,
		fontSize: fontSizes.md,
	},
});
