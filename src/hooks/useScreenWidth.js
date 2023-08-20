import { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';

const useScreenWidth = () => {
	const [screenWidth, setScreenWidth] = useState(
		Dimensions.get('window').width
	);

	useEffect(() => {
		const updateScreenWidth = () => {
			setScreenWidth(Dimensions.get('window').width);
		};
		updateScreenWidth();
	}, []);

	return [screenWidth];
};

export default useScreenWidth;
