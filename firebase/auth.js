// firebase/auth.js
import firebase from './firebaseConfig';

export const signUp = (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
};

export const signIn = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};

export const signOut = () => {
  return firebase.auth().signOut();
};
