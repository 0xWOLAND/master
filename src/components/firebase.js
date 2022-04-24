import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDxerr9qh8viGiaxBc2M1zGHN7SER1BPqM",
    authDomain: "catalyst-website-a12de.firebaseapp.com",
    projectId: "catalyst-website-a12de",
    storageBucket: "catalyst-website-a12de.appspot.com",
    messagingSenderId: "100778747021",
    appId: "1:100778747021:web:3f72ea178c620819f3aec4",
    measurementId: "G-1V390G9D6H"
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
  
export default db;