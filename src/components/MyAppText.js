import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const MyAppText = ({
	children,
	size = 20,
	align = 'center',
	textColour = 'white',
}) => {
	return (
		<View>
			<Text
				style={{
					fontSize: size,
					color: textColour,
					textAlign: align,
					fontFamily: 'BarlowSemiCondensed-Regular',
				}}
			>
				{children}
			</Text>
		</View>
	);
};

export default MyAppText;

const styles = StyleSheet.create({});
