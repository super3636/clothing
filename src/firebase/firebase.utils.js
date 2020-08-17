import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const config = {
  apiKey: "AIzaSyAzvN59j-ykFnZK9UewjqVXjYRxG7iYyTA",
  authDomain: "crwn-db-605f6.firebaseapp.com",
  databaseURL: "https://crwn-db-605f6.firebaseio.com",
  projectId: "crwn-db-605f6",
  storageBucket: "crwn-db-605f6.appspot.com",
  messagingSenderId: "501372111492",
  appId: "1:501372111492:web:3e9b1151cf5123949050d1",
  measurementId: "G-1N9PFV56KD",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log("asd");
    }
  }

  return userRef;
};
