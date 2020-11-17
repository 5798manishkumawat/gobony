import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBD5R-5f8rf6qIet2ZMT-Tyw7Ok4N8ULNw",
	authDomain: "gobony-d22b1.firebaseapp.com",
	databaseURL: "https://gobony-d22b1.firebaseio.com",
	projectId: "gobony-d22b1",
	storageBucket: "gobony-d22b1.appspot.com",
	messagingSenderId: "529775846676",
	appId: "1:529775846676:web:87ce0000ad2c41c7fe8e01",
	measurementId: "G-KM6G9GFS8H",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
