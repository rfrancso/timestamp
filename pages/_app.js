// pages/_app.js or a similar file
import firebase from '../app/firebase/config';
// pages/_app.js or a similar file
import { auth } from '../app/firebase/config';

auth.onAuthStateChanged(user => {
  if (user) {
    console.log('User is signed in:', user);
    // Update global state or context
  } else {
    console.log('No user signed in.');
  }
});