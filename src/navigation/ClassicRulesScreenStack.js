import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ClassicGamePlayAndResultsStack from './ClassicGamePlayAndResultsStack';
import Rules from '../screens/Rules';

const Stack = createNativeStackNavigator();

const ClassicRulesScreenStack = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				animation: 'fade_from_bottom',
			}}
			initialRouteName='ClassicGamePlay'
		>
			<Stack.Screen name='ClassicalRules' component={Rules} />
			<Stack.Screen
				name='ClassicGamePlay'
				component={ClassicGamePlayAndResultsStack}
			/>
		</Stack.Navigator>
	);
};

export default ClassicRulesScreenStack;
