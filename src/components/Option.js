import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';

const Option = ({
	size,
	icon,
	optionStyle,
	option,
	onPressNavigate = null,
}) => {
	const route = useRoute();

	const canNavigate = () => {
		if (onPressNavigate) {
			onPressNavigate({
				option,
				routeName: route.name,
			});
		}
	};

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
			onPress={canNavigate}
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
