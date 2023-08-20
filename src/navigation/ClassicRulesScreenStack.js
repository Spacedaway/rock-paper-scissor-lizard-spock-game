import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ClassicGamePlayAndResultsStack from './ClassicGamePlayAndResultsStack';
import Rules from '../screens/Rules';

const Stack = createNativeStackNavigator();

const ClassicRulesScreenStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen
				name='ClassicGame'
				component={ClassicGamePlayAndResultsStack}
			/>
			<Stack.Screen name='ClassicalRules' component={Rules} />
		</Stack.Navigator>
	);
};

export default ClassicRulesScreenStack;
