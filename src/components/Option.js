import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

const Option = ({ size, icon, optionStyle, option }) => {
	const navigation = useNavigation();
	const route = useRoute();

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
			onPress={() =>
				navigation.navigate('GamePlay', {
					option,
					routeName: route.name,
				})
			}
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
