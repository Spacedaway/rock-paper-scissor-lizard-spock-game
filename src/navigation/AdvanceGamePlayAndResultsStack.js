import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RockPaperScissorsLizardSpock from '../screens/RockPaperScissorsLizardSpock';
import GamePlay from '../screens/GamePlay';

const Stack = createNativeStackNavigator();

const AdvanceGamePlayAndResultsStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen
				name='Advance'
				component={RockPaperScissorsLizardSpock}
			/>
			<Stack.Screen name='GamePlay' component={GamePlay} />
		</Stack.Navigator>
	);
};

export default AdvanceGamePlayAndResultsStack;
