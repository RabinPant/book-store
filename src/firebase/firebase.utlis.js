import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyC5I94XJhDITr6zljGp02WoagyQ78ii1s4",
    authDomain: "bookstore-db-f3a1f.firebaseapp.com",
    databaseURL: "https://bookstore-db-f3a1f.firebaseio.com",
    projectId: "bookstore-db-f3a1f",
    storageBucket: "bookstore-db-f3a1f.appspot.com",
    messagingSenderId: "627962090671",
    appId: "1:627962090671:web:6e2cd3fd7c3843345eb05a",
    measurementId: "G-Z5G1EHMYV9"
  };
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = ()=>auth.signInWithPopup(provider);

export default firebase;