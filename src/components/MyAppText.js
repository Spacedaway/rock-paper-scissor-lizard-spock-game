import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const MyAppText = ({
	children,
	size = 20,
	align = 'center',
	textColour = 'white',
	margin = null,
}) => {
	return (
		<View>
			<Text
				style={{
					fontSize: size,
					color: textColour,
					textAlign: align,
					fontFamily: 'BarlowSemiCondensed-Regular',
					marginTop: margin,
				}}
			>
				{children}
			</Text>
		</View>
	);
};

export default MyAppText;

const styles = StyleSheet.create({});
