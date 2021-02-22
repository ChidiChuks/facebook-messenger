import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyDoW0cgRHFpDUeaMTvVAereQkrWFL2BOpg",
    authDomain: "facebook-messenger-79561.firebaseapp.com",
    projectId: "facebook-messenger-79561",
    storageBucket: "facebook-messenger-79561.appspot.com",
    messagingSenderId: "920933347677",
    appId: "1:920933347677:web:1e2fed762df6511ab2b8b4"

});

const db = firebaseApp.firestore();

export default db;