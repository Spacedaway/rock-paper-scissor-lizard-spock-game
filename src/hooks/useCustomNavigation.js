import { useNavigation, useRoute } from '@react-navigation/native';

const useCustomNavigation = (customeRouteName) => {
	const navigation = useNavigation();
	const route = useRoute();
	const routeName = customeRouteName || route.name;

	const handleNavigation = () => {
		if (routeName === 'Advance') {
			navigation.navigate('AdvancedRules');
		} else {
			navigation.navigate('ClassicalRules');
		}
	};

	return [handleNavigation];
};

export default useCustomNavigation;
