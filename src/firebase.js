import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDZfOvenw5c6EN7r7EQtj-mOhANXijQoo8',
  authDomain: 'fb-clone-fbae8.firebaseapp.com',
  projectId: 'fb-clone-fbae8',
  storageBucket: 'fb-clone-fbae8.appspot.com',
  messagingSenderId: '671714805226',
  appId: '1:671714805226:web:e20970a2b844ada5cb1e93',
  measurementId: 'G-PVTKBNT792',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
