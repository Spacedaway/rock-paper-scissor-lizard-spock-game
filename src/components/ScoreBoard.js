import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const ScoreBoard = () => {
	return (
		<View>
			<Image source={require(`${src}`)} />
			<View>
				<Text>SCORE</Text>
				<Text>12</Text>
			</View>
		</View>
	);
};

export default ScoreBoard;

const styles = StyleSheet.create({});
