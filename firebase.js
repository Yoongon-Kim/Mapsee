// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set, push, remove, off } from 'firebase/database';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxfwiwG1FLmUIu4-mJkKlL3T5TEzFEJjc",
  authDomain: "mapsee-login.firebaseapp.com",
  projectId: "mapsee-login",
  storageBucket: "mapsee-login.appspot.com",
  messagingSenderId: "9089617503",
  appId: "1:9089617503:web:4b9e4184c01fd9474e55ea"
};

// Initialize Firebase
// let app;
// if(firebase.apps.length===0){
//     app=firebase.initializeApp(firebaseConfig);
// }
// else{
//     app=firebase.app()
// }

// const auth =firebase.auth()
// export {auth};

const app= initializeApp(firebaseConfig);
export const auth=getAuth(app)