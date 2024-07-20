// plugins/firebase.js
// นำเข้าบริการ Firebase ที่แน่นอน
// eslint-disable-next-line import/default
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore";

// redirect url
// https://leaveshome.firebaseapp.com/__/auth/handler


const firebaseConfig = {
  apiKey: 'AIzaSyCX2SXiy-GGxLES2S-Iit3ro_mX9qJSc84',
  authDomain: 'leaveshome.firebaseapp.com',
  projectId: 'leaveshome',
  storageBucket: 'leaveshome.appspot.com',
  messagingSenderId: '33688321465',
  appId: '1:33688321465:web:a6d499cdfac6eccb9bca68',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const db = getFirestore();

const auth = firebase.auth();
const firestore = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export { firebase, auth, firestore, googleAuthProvider, facebookAuthProvider };



// ------------------------------------------------------------------------------------------------------------------------------------------------

// // import { initializeApp } from 'firebase/app';
// // import { getAuth } from 'firebase/auth';
// // import { getFirestore } from 'firebase/firestore';

// // const firebaseConfig = {
// //   apiKey: "AIzaSyCX2SXiy-GGxLES2S-Iit3ro_mX9qJSc84",
// //   authDomain: "leaveshome.firebaseapp.com",
// //   projectId: "leaveshome",
// //   storageBucket: "leaveshome.appspot.com",
// //   messagingSenderId: "33688321465",
// //   appId: "1:33688321465:web:a6d499cdfac6eccb9bca68",
// //   measurementId: "G-JRZ46DQL75"
// // };

// // const app = initializeApp(firebaseConfig);

// // export const auth = getAuth(app);
// // export const firestore = getFirestore(app);



