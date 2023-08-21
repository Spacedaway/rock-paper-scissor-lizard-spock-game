import { useNavigation, useRoute } from '@react-navigation/native';

const useCustomNavigation = (customRouteName) => {
	const navigation = useNavigation();
	const route = useRoute();
	const routeName = customRouteName || route.name;

	const handleNavigation = () => {
		if (customRouteName) {
			if (routeName === 'Advance') {
				navigation.navigate('Advance');
			} else if (routeName === 'Classic') {
				navigation.navigate('Classic');
			} else {
				navigation.goBack();
			}
		} else {
			if (routeName === 'Advance') {
				navigation.navigate('AdvancedRules');
			} else if (routeName === 'Classic') {
				navigation.navigate('ClassicalRules');
			} else {
				navigation.goBack();
			}
		}
	};

	return [handleNavigation];
};

export default useCustomNavigation;
