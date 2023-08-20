import { StyleSheet, View, TouchableOpacity } from 'react-native';
import React from 'react';
import MyAppText from './MyAppText';

const Buttons = ({
	brColour = 'hsl(217, 16%, 45%)',
	bgColour = null,
	title,
	onPressNavigate,
}) => {
	return (
		<View
			style={[
				{ backgroundColor: bgColour, borderColor: brColour },
				styles.container,
			]}
		>
			<TouchableOpacity onPress={onPressNavigate}>
				<MyAppText>{title}</MyAppText>
			</TouchableOpacity>
		</View>
	);
};

export default Buttons;

const styles = StyleSheet.create({
	container: {
		borderWidth: 2,
		borderRadius: 8,
		paddingHorizontal: 30,
		paddingVertical: 10,
	},
});
