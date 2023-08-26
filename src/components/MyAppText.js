import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { fontWeight } from '../utils/Styles';

const MyAppText = ({ styles = {}, ...props }) => {
	return (
		<View>
			<Text style={[style.fontFamily, styles]}>{props.children}</Text>
		</View>
	);
};

export default MyAppText;

const style = StyleSheet.create({
	fontFamily: {
		fontFamily: 'BarlowSemiCondensed-Regular',
		fontWeight: fontWeight.default,
	},
});
