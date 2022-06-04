import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDOAVTlGY7hOOZZpEeZIR8fG71YKHXhAMI",
    authDomain: "swaasthaya-16620.firebaseapp.com",
    projectId: "swaasthaya-16620",
    storageBucket: "swaasthaya-16620.appspot.com",
    messagingSenderId: "769679244745",
    appId: "1:769679244745:web:bb7a85d07cf222b48afc18",
    measurementId: "G-DPCP1V6Z13"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
export { db, auth };