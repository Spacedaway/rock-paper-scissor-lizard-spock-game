import { StyleSheet, View, Image } from 'react-native';
import React, { useContext } from 'react';
import Scores from './Scores';
import { Context as ScoresContext } from '../context/ScoresContext';

const ScoreBoard = ({ src, size, gameMode }) => {
	const { state } = useContext(ScoresContext);
	const scores = ({ win, draw, loss } = state[gameMode]);
	// const { win , draw, loss} = scores

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
					<Scores title='LOSE' value={loss} />
					<Scores title='DRAW' value={draw} />
					<Scores
						txtclr="color: 'hsl(229, 64%, 46%)'"
						bgClr='white'
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
		borderColor: 'hsl(217, 16%, 45%)',
		borderWidth: 2,
		borderRadius: 8,
		paddingHorizontal: 15,
		paddingVertical: 10,
		marginVertical: 20,
	},
	scoreboard: {
		flexDirection: 'row',
		gap: 10,
	},
});
