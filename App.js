import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainStackNavigator from './src/navigation/MainStackNavigator';

const Stack = createNativeStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<MainStackNavigator />
		</NavigationContainer>
	);
};

export default App;
