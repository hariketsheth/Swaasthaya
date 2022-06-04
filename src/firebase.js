import firebase from "firebase";
require("dotenv").config();

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: process.env.FIREBASE_AUTH,
  projectId: process.env.FIREBASE_PROJECT,
  storageBucket: process.env.FIREBASE_STORAGE,
  messagingSenderId: process.env.FIREBASE_MESSAGING,
  appId: process.env.FIREBASE_APP,
  measurementId: process.env.FIREBASE_MEASUREMENT,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const googleAuth = firebaseApp.googleAuth();

export default { db, auth, googleAuth };
