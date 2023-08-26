import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

import MyAppText from '../components/MyAppText';
import Button from '../components/Button';
import { colours, fontSizes, spacing } from '../utils/Styles';

const Initial = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.container}>
			<MyAppText styles={styles.text}>
				Welcome to Rock Paper Scissor Spock Lizard Game
			</MyAppText>
			<Button
				title="LET'S PLAY!"
				style={styles.button}
				onPressNavigate={() => navigation.navigate('ClassicOrAdvance')}
			/>
		</SafeAreaView>
	);
};

export default Initial;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colours.background,
		gap: spacing.md,
	},
	text: {
		color: colours.white,
		fontSize: fontSizes.xxl,
		textAlign: 'center',
	},
	button: {
		color: colours.white,
		fontSize: fontSizes.lg,
		textAlign: 'center',
	},
});
