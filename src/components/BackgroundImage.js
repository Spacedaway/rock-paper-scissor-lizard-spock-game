import { Image, View } from 'react-native';
import React from 'react';

const BackgroundImage = ({ size, src }) => {
	return (
		<View style={{ justifyContent: 'center' }}>
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
