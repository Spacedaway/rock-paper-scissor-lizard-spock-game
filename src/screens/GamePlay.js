import React, { useEffect, useState } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

import ScoreBoard from '../components/ScoreBoard';
import UserHouseOptions from '../components/UserHouseOptions';
import Result from '../components/Result';
import Button from '../components/Button';
import useCustomNavigation from '../hooks/useCustomNavigation';
import useScreenWidth from '../hooks/useScreenWidth';
import useGamePlayHandler from '../hooks/useGameplayHandler';
import { colours, fontSizes, pickStyles } from '../utils/Styles';

const GamePlay = () => {
	const [screenWidth] = useScreenWidth();
	const navigation = useNavigation();
	const route = useRoute();
	const { option, routeName, gameMode } = route.params;
	const [handleRulesNavigation] = useCustomNavigation(routeName);
	const [houseChoice, getOutcome, outcome] = useGamePlayHandler(
		option,
		gameMode
	);
	const [showHouseChoice, setShowHouseChoice] = useState(false);
	const [showResult, setShowResult] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			getOutcome();
			setShowHouseChoice(true);
			setShowResult(true);
		}, 1000);
		return () => clearTimeout(timer);
	}, []);

	routeName === 'Advance'
		? (source = require('../../assets/images/logo-bonus.png'))
		: (source = require('../../assets/images/logo.png'));

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar backgroundColor={colours.background} />
			<ScoreBoard gameMode={gameMode} src={source} size={screenWidth * 0.2} />
			<View style={styles.picks}>
				<UserHouseOptions
					option={option}
					reset={pickStyles['reset']}
					title='YOU PICKED'
				/>
				<UserHouseOptions
					option={showHouseChoice ? houseChoice : 'default'}
					reset={pickStyles['reset']}
					title='THE HOUSE PICKED'
				/>
			</View>
			<Result
				visible={showResult ? null : 'none'}
				outcome={outcome}
				callback={() => navigation.goBack()}
			/>
			<View style={styles.rules}>
				<Button
					title='RULES'
					brClr={colours.white}
					style={{ color: colours.white, fontSize: fontSizes.md }}
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
