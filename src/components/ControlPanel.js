import { StyleSheet, View } from 'react-native';
import React from 'react';
import Button from './Button';
import { useNavigation } from '@react-navigation/native';

const ControlPanel = () => {
	const navigation = useNavigation();
	const handleNavigation = () => {
		navigation.navigate('AdvancedRules');
	};

	return (
		<View style={{ gap: 10, marginBottom: 20 }}>
			<View style={{ flexDirection: 'row', gap: 10 }}>
				<Button title='RULES' onPressNavigate={handleNavigation} />
				<Button title='RESET' onPressNavigate={handleNavigation} />
			</View>
			<Button
				title='BASIC MODE'
				bgColour='hsl(217, 16%, 45%)'
				brColour='white'
				onPressNavigate={handleNavigation}
			/>
		</View>
	);
};

export default ControlPanel;

const styles = StyleSheet.create({});
