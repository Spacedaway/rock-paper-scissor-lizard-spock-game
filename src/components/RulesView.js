import React from 'react';
import { Image, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

import MyAppText from './MyAppText';
import useScreenWidth from '../hooks/useScreenWidth';
import { colours, fontSizes, fontWeight, spacing } from '../utils/Styles';

const RulesView = ({ src }) => {
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
			<StatusBar backgroundColor={colours.white} />
			<MyAppText styles={styles.rulesStyle}>RULES</MyAppText>
			<Image source={src} width={width} height={width} />
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
		justifyContent: 'space-around',
		backgroundColor: colours.white,
	},
	close: {
		width: spacing.xl,
		height: spacing.xl,
	},
	rulesStyle: {
		fontSize: fontSizes.xxl,
		color: colours.DeepScoreText,
		fontWeight: fontWeight.bold,
	},
});
