import { StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import React from 'react';
import RulesView from '../components/RulesView';
import useScreenWidth from '../hooks/useScreenWidth';

const Rules = () => {
	const route = useRoute();

	if (route.name === 'AdvancedRules') {
		source = require('../../assets/images/image-rules-bonus.png');
	} else {
		source = require('../../assets/images/image-rules.png');
	}

	return <RulesView src={source} routeName={route.name} />;
};

export default Rules;

const styles = StyleSheet.create({});
