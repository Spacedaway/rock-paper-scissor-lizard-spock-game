import { StyleSheet, View } from 'react-native';
import React from 'react';
import Button from './Button';
import useCustomNavigation from '../hooks/useCustomNavigation';
import { useRoute } from '@react-navigation/native';

const ControlPanel = ({ modeTitle }) => {
	const [handleRulesNavigation, handleGameModeNavigation] =
		useCustomNavigation();

	return (
		<View style={{ gap: 10, marginBottom: 20 }}>
			<View style={{ flexDirection: 'row', gap: 10 }}>
				<Button title='RULES' onPressNavigate={handleRulesNavigation} />
				<Button title='RESET' onPressNavigate={handleRulesNavigation} />
			</View>
			<Button
				title={modeTitle}
				bgColour='hsl(217, 16%, 45%)'
				brColour='white'
				onPressNavigate={handleGameModeNavigation}
			/>
		</View>
	);
};

export default ControlPanel;

const styles = StyleSheet.create({});
