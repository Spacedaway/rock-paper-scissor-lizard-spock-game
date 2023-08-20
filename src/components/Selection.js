import { StyleSheet, View } from 'react-native';
import React from 'react';
import BackgroundImage from './BackgroundImage';

const Selection = ({ size }) => {
	return (
		<View>
			<BackgroundImage
				size={size * 0.6}
				src={require('../../assets/images/bg-pentagon.png')}
			/>
		</View>
	);
};

export default Selection;

const styles = StyleSheet.create({});
