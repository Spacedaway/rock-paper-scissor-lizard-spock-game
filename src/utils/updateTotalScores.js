import { collection, doc, setDoc } from 'firebase/firestore';

import { db } from '../services/firebaseConfig';

const updateTotalScores = async (id, scores) => {
	const playersCollectionRef = collection(db, 'players');
	const playerDocRef = doc(playersCollectionRef, id);

	try {
		await setDoc(playerDocRef, scores);
		console.log('Player data updated successfully.');
	} catch (error) {
		console.error('Error updating player data:', error);
	}
};

export default updateTotalScores;
