
// / Import the necessary functions from the Firebase SDK
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfPHZAcaqYrA5zSWluWWK7vjgleQe9lVc",
  authDomain: "f-e9c99.firebaseapp.com",
  projectId: "f-e9c99",
  storageBucket: "f-e9c99.appspot.com",
  messagingSenderId: "952754839507",
  appId: "1:952754839507:web:0bc0b6466005cee14c5926"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged };
export { app }; 

























// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';

// // const firebaseConfig = {
// //   apiKey: "YOUR_FIREBASE_API_KEY",
// //   authDomain: "YOUR_FIREBASE_AUTH_DOMAIN",
// //   projectId: "YOUR_FIREBASE_PROJECT_ID",
// //   storageBucket: "YOUR_FIREBASE_STORAGE_BUCKET",
// //   messagingSenderId: "YOUR_FIREBASE_MESSAGING_SENDER_ID",
// //   appId: "YOUR_FIREBASE_APP_ID"
// // };


// import { initializeApp } from "firebase/app";


// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCZb9yAyJGNhnmekFSzt-AdSDw-FXtabXc",
//   authDomain: "ama2024-8b6e9.firebaseapp.com",
//   projectId: "ama2024-8b6e9",
//   storageBucket: "ama2024-8b6e9.appspot.com",
//   messagingSenderId: "721970323917",
//   appId: "1:721970323917:web:a5583b99df4c71ea4be484"
// };

// // Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);


// export const auth = firebase.auth();
// export const firestore = firebase.firestore();
// export const provider = new firebase.auth.GoogleAuthProvider();
