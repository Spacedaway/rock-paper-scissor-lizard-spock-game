import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

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
		justifyContent: 'center',
		marginTop: 125,
	},
});
