import { Image, View, StyleSheet } from 'react-native';
import React from 'react';
import Option from './Option';

const BackgroundImage = ({ size, src }) => {
	return (
		<View style={styles.container}>
			<Image
				style={{
					width: size,
					height: size,
				}}
				source={src}
			/>
		</View>
	);
};

export default BackgroundImage;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: -250,
	},
});
