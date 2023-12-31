import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RockPaperScissors from '../screens/RockPaperScissors';
import GamePlay from '../screens/GamePlay';

const Stack = createNativeStackNavigator();

const ClassicGamePlayAndResultsStack = () => {
	return (
		<Stack.Navigator
			animationEnabled={false}
			screenOptions={{
				headerShown: false,
				animation: 'slide_from_right',
			}}
		>
			<Stack.Screen name='Classic' component={RockPaperScissors} />
			<Stack.Screen name='GamePlay' component={GamePlay} />
		</Stack.Navigator>
	);
};

export default ClassicGamePlayAndResultsStack;
