import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AdvanceGamePlayAndResultsStack from './AdvanceGamePlayAndResultsStack';
import Rules from '../screens/Rules';

const Stack = createNativeStackNavigator();

const AdvanceRulesScreenStack = () => {
	return (
		<Stack.Navigator
			screenOptions={{ headerShown: false }}
			initialRouteName='AdvancedRules'
		>
			<Stack.Screen name='AdvancedRules' component={Rules} />
			<Stack.Screen
				name='AdvanceGamePlay'
				component={AdvanceGamePlayAndResultsStack}
			/>
		</Stack.Navigator>
	);
};

export default AdvanceRulesScreenStack;
