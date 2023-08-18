import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AdvanceGamePlayAndResultsStack from './AdvanceGamePlayAndResultsStack';
import Rules from '../screens/Rules';

const Stack = createNativeStackNavigator();

const AdvanceRulesScreenStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen
				name='AdvanceGamePlay'
				component={AdvanceGamePlayAndResultsStack}
			/>
			<Stack.Screen name='AdvanceRules' component={Rules} />
		</Stack.Navigator>
	);
};

export default AdvanceRulesScreenStack;
