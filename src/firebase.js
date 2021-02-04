import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyDJq1dkE5VQB34RaFPYkSB1f_ZlEb52dU0',
	authDomain: 'amirahofficialsite.firebaseapp.com',
	projectId: 'amirahofficialsite',
	storageBucket: 'amirahofficialsite.appspot.com',
	messagingSenderId: '955642905634',
	appId: '1:955642905634:web:72b88e874f96fabaf6767b',
	measurementId: 'G-J7H2DQTB2M',
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
