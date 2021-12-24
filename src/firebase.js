import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyAtRoL1V1RH2P2pE9S8PjB4Tn29PowdvJ0',
	authDomain: 'amirah-gems-official-server.firebaseapp.com',
	projectId: 'amirah-gems-official-server',
	storageBucket: 'amirah-gems-official-server.appspot.com',
	messagingSenderId: '756580440318',
	appId: '1:756580440318:web:8d00fdbb75f4af0a996daf',
	measurementId: 'G-72KKNG5WPK',
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
