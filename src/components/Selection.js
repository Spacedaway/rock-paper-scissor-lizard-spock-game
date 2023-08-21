import { StyleSheet, View } from 'react-native';
import React from 'react';
import BackgroundImage from './BackgroundImage';
import Option from './Option';
import { optionStyles, basicOptions } from '../../assets/styles/styles';
import { useNavigation } from '@react-navigation/native';

const Selection = ({ size, gameMode }) => {
	const navigation = useNavigation();
	const onPressNavigate = (params) => {
		navigation.navigate('GamePlay', params);
	};

	if (gameMode === 'Basic') {
		sliceValue = 3;
		source = require('../../assets/images/bg-triangle.png');
	} else {
		sliceValue = Object.keys(optionStyles).length;
		source = require('../../assets/images/bg-pentagon.png');
	}

	return (
		<View style={styles.container}>
			<BackgroundImage size={size * 0.6} src={source} />
			{Object.keys(optionStyles)
				.slice(0, sliceValue)
				.map((key) => (
					<Option
						key={key}
						size={size * 0.3}
						icon={optionStyles[key].iconPath}
						optionStyle={optionStyles[key]}
						basicStyle={
							gameMode === 'Basic' ? basicOptions[key] : null
						}
						option={key}
						onPressNavigate={onPressNavigate}
					/>
				))}
		</View>
	);
};

export default Selection;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
