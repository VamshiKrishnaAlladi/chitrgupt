import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyCwjGUNTk5T6qn3sy5DVfj5dV-AybjwdpM',
    authDomain: 'chitrgupt.firebaseapp.com',
    projectId: 'chitrgupt',
    storageBucket: 'chitrgupt.appspot.com',
    messagingSenderId: '539937749234',
    appId: '1:539937749234:web:8524d71b753bf957cb386b',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Auth exports
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

// Firestore exports
export const firestore = firebase.firestore();
export const { serverTimestamp } = firebase.firestore.FieldValue;
export const { fromMillis } = firebase.firestore.Timestamp;
export const { increment } = firebase.firestore.FieldValue;
