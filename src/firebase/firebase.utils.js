import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAGzMtn7UZ62ZfD8jJKJUF5wKJV9nCrYvo",
    authDomain: "crown-db-6328d.firebaseapp.com",
    projectId: "crown-db-6328d",
    storageBucket: "crown-db-6328d.appspot.com",
    messagingSenderId: "796747481682",
    appId: "1:796747481682:web:51893720ad5f2ff456558b",
    measurementId: "G-EYWJ7117VR"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: "select_account"});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;