import React, { useContext } from 'react';
import { StyleSheet, View, Image } from 'react-native';

import Scores from './Scores';
import { Context as ScoresContext } from '../context/ScoresContext';
import { colours, fontSizes, fontWeight, spacing } from '../utils/Styles';

const ScoreBoard = ({ src, size, gameMode }) => {
	const { state } = useContext(ScoresContext);
	const scores = ({ win, draw, loss } = state[gameMode]);

	return (
		<View style={{ flexDirection: 'row' }}>
			<View style={styles.container}>
				<Image
					source={src}
					resizeMode='contain'
					style={{
						width: size,
						height: size,
					}}
				/>
				<View style={styles.scoreboard}>
					<Scores
						bgclr={colours.deepBlue}
						scoreStyle={styles.score}
						titleStyle={styles.title}
						title='LOSE'
						value={loss}
					/>
					<Scores
						bgclr={colours.deepBlue}
						scoreStyle={styles.score}
						titleStyle={styles.title}
						title='DRAW'
						value={draw}
					/>
					<Scores
						bgclr='white'
						scoreStyle={{
							color: colours.DeepScoreText,
							fontSize: fontSizes.xl,
							textAlign: 'center',
						}}
						titleStyle={{
							textAlign: 'center',
							color: colours.lightScoreText,
							fontWeight: fontWeight.bold,
						}}
						title='SCORE'
						value={win}
					/>
				</View>
			</View>
		</View>
	);
};

export default ScoreBoard;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderColor: colours.lightGray,
		borderWidth: 2,
		borderRadius: spacing.sm,
		paddingHorizontal: spacing.md,
		paddingVertical: spacing.sm,
		marginVertical: spacing.lg,
	},
	scoreboard: {
		flexDirection: 'row',
		gap: spacing.sm,
	},
	title: {
		color: colours.white,
		textAlign: 'center',
		fontWeight: fontWeight.bold,
	},
	score: {
		textAlign: 'center',
		fontSize: fontSizes.xl,
		color: colours.DeepScoreText,
	},
});
