import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import MyAppText from './MyAppText';
import useScreenWidth from '../hooks/useScreenWidth';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

const RulesView = ({ src, routeName }) => {
	const navigation = useNavigation();
	const route = useRoute();
	const [screenWidth] = useScreenWidth();
	const width = screenWidth * 0.6;

	const navigateBack = () => {
		if (route.params?.previousScreen) {
			navigation.navigate(route.params.previousScreen);
		} else {
			navigation.goBack();
		}
	};

	return (
		<SafeAreaView style={styles.container}>
			<MyAppText margin={50} size={40} textColour='hsl(229, 23%, 28%)'>
				RULES
			</MyAppText>
			<Image
				source={src}
				width={width}
				height={width}
				style={styles.image}
			/>
			<TouchableOpacity onPress={navigateBack}>
				<Image
					source={require('../../assets/images/icon-close.png')}
					style={styles.close}
				/>
			</TouchableOpacity>
		</SafeAreaView>
	);
};

export default RulesView;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	image: {
		marginTop: -100,
	},
	close: {
		width: 30,
		height: 30,
		marginTop: -100,
	},
});
