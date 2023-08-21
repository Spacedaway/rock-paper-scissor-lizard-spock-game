import { StyleSheet, View, Image } from 'react-native';
import React from 'react';
import MyAppText from './MyAppText';

const ScoreBoard = ({ src, size }) => {
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
					<View style={styles.secondaryscore}>
						<MyAppText size={15}>LOSE</MyAppText>
						<MyAppText
							textColour="color: 'hsl(229, 25%, 31%)'"
							size={30}
						>
							0
						</MyAppText>
					</View>
					<View style={styles.secondaryscore}>
						<MyAppText size={15}>DRAW</MyAppText>
						<MyAppText
							textColour="color: 'hsl(229, 25%, 31%)'"
							size={30}
						>
							0
						</MyAppText>
					</View>
					<View style={styles.primaryscore}>
						<MyAppText
							textColour="color: 'hsl(229, 64%, 46%)'"
							size={15}
						>
							SCORE
						</MyAppText>
						<MyAppText
							textColour="color: 'hsl(229, 25%, 31%)'"
							size={30}
						>
							12
						</MyAppText>
					</View>
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
	primaryscore: {
		backgroundColor: 'white',
		borderRadius: 8,
		width: 80,
		paddingTop: 5,
	},
	secondaryscore: {
		backgroundColor: 'hsl(237, 49%, 15%)',
		borderRadius: 8,
		width: 80,
		paddingTop: 5,
	},
});
