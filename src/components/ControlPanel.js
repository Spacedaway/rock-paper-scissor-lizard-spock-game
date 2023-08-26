import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';

import Button from './Button';
import useCustomNavigation from '../hooks/useCustomNavigation';
import { Context as ScoresContext } from '../context/ScoresContext';
import { colours, fontSizes, spacing } from '../utils/Styles';

const ControlPanel = ({ modeTitle, gameMode }) => {
	const [handleRulesNavigation, handleGameModeNavigation] =
		useCustomNavigation();
	const { reset } = useContext(ScoresContext);

	return (
		<View style={{ gap: spacing.sm, marginBottom: spacing.lg }}>
			<View style={{ flexDirection: 'row', gap: spacing.sm }}>
				<Button
					title='RULES'
					style={styles.buttonText}
					onPressNavigate={handleRulesNavigation}
				/>
				<Button
					title='RESET'
					style={styles.buttonText}
					onPressNavigate={() => reset(gameMode)}
				/>
			</View>
			<Button
				title={modeTitle}
				bgClr={colours.lightGray}
				brClr={colours.white}
				style={styles.buttonText}
				onPressNavigate={handleGameModeNavigation}
			/>
		</View>
	);
};

export default ControlPanel;

const styles = StyleSheet.create({
	buttonText: {
		fontSize: fontSizes.md,
		color: colours.white,
		textAlign: 'center',
	},
});
