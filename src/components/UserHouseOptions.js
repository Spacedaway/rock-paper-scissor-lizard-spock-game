import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Option from './Option';
import useScreenWidth from '../hooks/useScreenWidth';
import optionStyles from '../../assets/styles/styles';

const UserHouseOptions = ({ option }) => {
	const [screenWidth] = useScreenWidth();

	return (
		<Option
			size={screenWidth * 0.3}
			icon={optionStyles[option].iconPath}
			optionStyle={optionStyles[option]}
		/>
	);
};

export default UserHouseOptions;

const styles = StyleSheet.create({});
