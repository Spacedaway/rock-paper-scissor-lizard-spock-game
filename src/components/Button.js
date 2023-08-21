import { StyleSheet, View, TouchableOpacity } from 'react-native';
import React from 'react';
import MyAppText from './MyAppText';

const Button = ({
	brColour = 'hsl(217, 16%, 45%)',
	txtclr = 'white',
	bgColour = null,
	txtsz = null,
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
				<MyAppText size={txtsz} textColour={txtclr}>
					{title}
				</MyAppText>
			</TouchableOpacity>
		</View>
	);
};

export default Button;

const styles = StyleSheet.create({
	container: {
		borderWidth: 2,
		borderRadius: 8,
		paddingHorizontal: 30,
		paddingVertical: 10,
	},
});
