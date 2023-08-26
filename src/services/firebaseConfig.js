import { initializeApp } from 'firebase/app';
import {
	API_KEY,
	AUTH_DOMAIN,
	PROJECT_ID,
	STORAGE_BUCKET,
	MESSAGING_SENDERID,
	API_ID,
	MEASUREMENT_ID,
} from '@env';

const firebaseConfig = {
	apiKey: API_KEY,
	authDomain: AUTH_DOMAIN,
	databaseURL: `https://${PROJECT_ID}.firebaseio.com`,
	projectId: PROJECT_ID,
	storageBucket: STORAGE_BUCKET,
	messagingSenderId: MESSAGING_SENDERID,
	appId: API_ID,
	measurementId: MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
