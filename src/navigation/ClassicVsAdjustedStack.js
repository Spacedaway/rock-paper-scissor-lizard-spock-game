import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AdvanceRulesScreenStack from './AdvanceRulesScreenStack';
import ClassicRulesScreenStack from './ClassicRulesScreenStack';

const Stack = createNativeStackNavigator();

const ClassicVsAdjustedStack = () => {
	return (
		<Stack.Navigator
			initialRouteName='AdvanceGame'
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen
				name='AdvanceGame'
				component={AdvanceRulesScreenStack}
			/>
			<Stack.Screen
				name='ClassicGame'
				component={ClassicRulesScreenStack}
			/>
		</Stack.Navigator>
	);
};

export default ClassicVsAdjustedStack;
