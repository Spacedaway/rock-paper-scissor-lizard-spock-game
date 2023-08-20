import * as Font from 'expo-font';

export default useFonts = async () => {
	await Font.loadAsync({
		'BarlowSemiCondensed-Regular': require('../../assets/fonts/BarlowSemiCondensed-Regular.ttf'),
		'BarlowSemiCondensed-Bold': require('../../assets/fonts/BarlowSemiCondensed-Bold.ttf'),
	});
};
