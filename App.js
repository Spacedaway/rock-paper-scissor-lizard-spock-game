import React, { useState, useEffect, useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainStackNavigator from './src/navigation/MainStackNavigator';
import useFonts from './src/hooks/useFonts';
import { navigationRef } from './src/services/navigationRef';
import { Provider as ScoresProvider } from './src/context/ScoresContext';

const Stack = createNativeStackNavigator();

const App = () => {
	const [appIsReady, setAppIsReady] = useState(false);

	useEffect(() => {
		async function prepare() {
			try {
				await useFonts();
			} catch (e) {
				console.warn(e);
			} finally {
				setAppIsReady(true);
			}
		}
		prepare();
	}, []);

	const onLayoutRootView = useCallback(async () => {
		if (appIsReady) {
			await SplashScreen.hideAsync();
		}
	}, [appIsReady]);

	if (!appIsReady) {
		return null;
	}

	return (
		<ScoresProvider>
			<NavigationContainer
				onLayout={onLayoutRootView}
				ref={navigationRef}
			>
				<MainStackNavigator />
			</NavigationContainer>
		</ScoresProvider>
	);
};

export default App;
