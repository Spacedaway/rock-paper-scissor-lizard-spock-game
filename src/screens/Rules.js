import React from 'react';
import { useRoute } from '@react-navigation/native';

import RulesView from '../components/RulesView';

const Rules = () => {
	const route = useRoute();

	route.name === 'AdvancedRules'
		? (source = require('../../assets/images/image-rules-bonus.png'))
		: (source = require('../../assets/images/image-rules.png'));

	return <RulesView src={source} routeName={route.name} />;
};

export default Rules;
