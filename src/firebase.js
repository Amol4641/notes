// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMS3kL4sfhjp60nMOuHf_vls7QYNzsWBo",
  authDomain: "todo-e75dc.firebaseapp.com",
  projectId: "todo-e75dc",
  storageBucket: "todo-e75dc.appspot.com",
  messagingSenderId: "604897785737",
  appId: "1:604897785737:web:b99b8dd491ceebbb7a1358"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 export const auth=firebase.auth();