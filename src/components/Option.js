import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

const Option = ({ size, icon, optionStyle }) => {
	return (
		<TouchableOpacity
			style={[
				{
					width: size,
					height: size,
					borderRadius: size / 2,
				},
				styles.container,
				optionStyle,
			]}
		>
			<Image source={icon} resizeMode='cover' />
		</TouchableOpacity>
	);
};

export default Option;

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center',
		elevation: 6,
		borderWidth: 16,
	},
});
