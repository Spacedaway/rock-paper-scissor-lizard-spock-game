import { Image } from 'react-native';
import React from 'react';

const BackgroundImage = ({ size, src }) => {
	return (
		<Image
			style={{
				width: size,
				height: size,
			}}
			source={require(`${src}`)}
		/>
	);
};

export default BackgroundImage;
