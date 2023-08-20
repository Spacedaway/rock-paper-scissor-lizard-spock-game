import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const MyAppText = ({ children }) => {
	return (
		<View>
			<Text
				style={{
					fontSize: 40,
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
