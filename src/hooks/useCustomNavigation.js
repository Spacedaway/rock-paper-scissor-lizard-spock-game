import { useNavigation, useRoute } from '@react-navigation/native';

const useCustomNavigation = (customeRouteName) => {
	const navigation = useNavigation();
	const route = useRoute();
	const routeName = customeRouteName || route.name;

	const handleRulesNavigation = () => {
		if (routeName === 'Advance') {
			navigation.navigate('AdvancedRules');
		} else {
			navigation.navigate('ClassicalRules');
		}
	};

	const handleGameModeNavigation = () => {
		if (routeName === 'Advance') {
			navigation.navigate('ClassicGame');
		} else {
			navigation.navigate('AdvanceGame');
		}
	};

	return [handleRulesNavigation, handleGameModeNavigation];
};

export default useCustomNavigation;
