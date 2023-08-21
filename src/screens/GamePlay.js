import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';
import ScoreBoard from '../components/ScoreBoard';
import useScreenWidth from '../hooks/useScreenWidth';
import UserHouseOptions from '../components/UserHouseOptions';
import { pickStyles } from '../../assets/styles/styles';

const GamePlay = () => {
	const [screenWidth] = useScreenWidth();
	const route = useRoute();
	const { option, routeName } = route.params;

	if (routeName === 'Advance') {
		source = require('../../assets/images/logo-bonus.png');
	} else {
		source = require('../../assets/images/logo.png');
	}

	return (
		<SafeAreaView style={styles.container}>
			<ScoreBoard src={source} size={screenWidth * 0.2} />
			<View style={styles.picks}>
				<UserHouseOptions
					option={option}
					pick={pickStyles['player']}
					title='YOU PICKED'
				/>
				<UserHouseOptions
					option={option}
					pick={pickStyles['house']}
					title='THE HOUSE PICKED'
				/>
			</View>
		</SafeAreaView>
	);
};

export default GamePlay;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'hsl(214, 47%, 23%)',
		alignItems: 'center',
	},
	picks: {
		flexDirection: 'row',
		gap: 100,
		marginTop: 100,
	},
});
