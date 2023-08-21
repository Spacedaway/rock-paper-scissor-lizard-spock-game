import { StyleSheet, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import ScoreBoard from '../components/ScoreBoard';
import useScreenWidth from '../hooks/useScreenWidth';
import UserHouseOptions from '../components/UserHouseOptions';
import useCustomNavigation from '../hooks/useCustomNavigation';
import { pickStyles } from '../../assets/styles/styles';
import Result from '../components/Result';
import Button from '../components/Button';

const GamePlay = () => {
	const [screenWidth] = useScreenWidth();
	const navigation = useNavigation();
	const route = useRoute();
	const { option, routeName } = route.params;
	const [handleRulesNavigation] = useCustomNavigation(routeName);

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
					reset={pickStyles['reset']}
					title='YOU PICKED'
				/>
				<UserHouseOptions
					option={option}
					reset={pickStyles['reset']}
					title='THE HOUSE PICKED'
				/>
			</View>
			<Result callback={() => navigation.goBack()} />
			<View style={styles.rules}>
				<Button
					title='RULES'
					brColour='white'
					txtsz={20}
					onPressNavigate={handleRulesNavigation}
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
	rules: {
		marginTop: 80,
	},
});
