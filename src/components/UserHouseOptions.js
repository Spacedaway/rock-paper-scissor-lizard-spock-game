import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Option from './Option';
import useScreenWidth from '../hooks/useScreenWidth';
import { optionStyles } from '../../assets/styles/styles';
import MyAppText from './MyAppText';

const UserHouseOptions = ({ option, pick, title }) => {
	const [screenWidth] = useScreenWidth();

	return (
		<View style={styles.container}>
			<Option
				size={screenWidth * 0.3}
				icon={optionStyles[option].iconPath}
				optionStyle={optionStyles[option]}
				pickStyle={pick}
			/>
			<MyAppText>{title}</MyAppText>
		</View>
	);
};

export default UserHouseOptions;

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		gap: 20,
	},
});
