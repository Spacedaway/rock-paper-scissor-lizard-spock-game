import { Image } from 'react-native';
import React from 'react';
import backgroungImage from '../../assets/images/bg-pentagon.png';

const BackgroundImage = ({ size, src }) => {
	return (
		<Image
			style={{
				width: size,
				height: size,
			}}
			source={src}
		/>
	);
};

export default BackgroundImage;
