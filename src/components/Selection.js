import { StyleSheet, View } from 'react-native';
import React from 'react';
import BackgroundImage from './BackgroundImage';
import Option from './Option';
import optionStyles from '../../assets/styles/styles';

const Selection = ({ size }) => {
	return (
		<View style={styles.container}>
			<BackgroundImage
				size={size * 0.6}
				src={require('../../assets/images/bg-pentagon.png')}
			/>
			{Object.keys(optionStyles).map((key) => (
				<Option
					key={key}
					size={size * 0.3}
					icon={optionStyles[key].iconPath}
					optionStyle={optionStyles[key]}
					option={key}
				/>
			))}
		</View>
	);
};

export default Selection;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// borderColor: 'white',
		// borderWidth: 2,
	},
});
