import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyBneniuHRaTCqgGhhv82ttmRquRAPe0g7I',
	authDomain: 'amirah-49b66.firebaseapp.com',
	projectId: 'amirah-49b66',
	storageBucket: 'amirah-49b66.appspot.com',
	messagingSenderId: '297754531483',
	appId: '1:297754531483:web:40bd2348c86de04f05583e',
	measurementId: 'G-V65BJZGQG0',
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
