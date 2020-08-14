import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config={ 
    apiKey : "AIzaSyBDIe2JHAFSKnvTw7J6y3QlIB0ZN0cXRPw" ,   authDomain : "crwn-db-b396a.firebaseapp.com" ,   DatabaseURL : "https://crwn-db-b396a.firebaseio.com" ,   projectId : "CRWN-db-b396a " ,   storageBucket : " crwn-db-b396a.appspot.com " ,   messagingSenderId : " 813761762134 " ,   appId : " 1: 813761762134: web: c7b10e4fa254bad4237cf7 " ,   measurementId : " G-WQGHM4G591 "
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore =firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle =()=>auth.signInWithPopup(provider);
export default firebase;
