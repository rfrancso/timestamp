// pages/_app.js or a similar file
import firebase from '../firebase/firebaseConfig';

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log('User is signed in:', user);
    // Update global state or context
  } else {
    console.log('No user signed in.');
  }
});
