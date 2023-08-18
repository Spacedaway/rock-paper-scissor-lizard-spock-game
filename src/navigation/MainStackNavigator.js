import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AdvanceGamePlayAndResultsStack from './AdvanceGamePlayAndResultsStack';
import AdvanceRulesScreenStack from './AdvanceRulesScreenStack';
import ClassicGamePlayAndResultsStack from './ClassicGamePlayAndResultsStack';
import ClassicRulesScreenStack from './ClassicRulesScreenStack';
import ClassicVsAdjustedStack from './ClassicVsAdjustedStack';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
	return (
		<Stack.Navigator
			initialRouteName='ClassicOrAdvance'
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen
				name='ClassicOrAdvance'
				component={ClassicVsAdjustedStack}
			/>
			<Stack.Screen
				name='AdvanceRules'
				component={AdvanceRulesScreenStack}
			/>
			<Stack.Screen
				name='ClassicRules'
				component={ClassicRulesScreenStack}
			/>
			<Stack.Screen
				name='AdvanceGamePlay'
				component={AdvanceGamePlayAndResultsStack}
			/>
			<Stack.Screen
				name='ClassicGamePlay'
				component={ClassicGamePlayAndResultsStack}
			/>
		</Stack.Navigator>
	);
};

export default MainStackNavigator;
