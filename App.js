import React, { useState, useEffect, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';

import { navigationRef } from './src/services/navigationRef';
import { Provider as ScoresProvider } from './src/context/ScoresContext';
import { Provider as AuthProvider } from './src/context/AuthContext';
import MainStackNavigator from './src/navigation/MainStackNavigator';
import useFonts from './src/hooks/useFonts';

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
		<AuthProvider>
			<ScoresProvider>
				<NavigationContainer
					onLayout={onLayoutRootView}
					ref={navigationRef}
				>
					<MainStackNavigator />
				</NavigationContainer>
			</ScoresProvider>
		</AuthProvider>
	);
};

export default App;
