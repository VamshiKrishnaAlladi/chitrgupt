import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyCAML8jgoP0zOAMFsV4aj7aLaCvBlwDVkI',
    authDomain: 'xp-man.firebaseapp.com',
    projectId: 'xp-man',
    storageBucket: 'xp-man.appspot.com',
    messagingSenderId: '385493406657',
    appId: '1:385493406657:web:b42b2593916cbbd3b7d540',
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
