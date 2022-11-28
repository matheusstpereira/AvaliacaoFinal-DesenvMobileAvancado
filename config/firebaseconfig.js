import { initializeApp } from '@firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

import firebase from "firebase/compat/app"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDTxM5nFSaFeLRfGuxJIcrlmB5ETqMBNW8",
    authDomain: "trabalhoindividualmobile.firebaseapp.com",
    projectId: "trabalhoindividualmobile",
    storageBucket: "trabalhoindividualmobile.appspot.com",
    messagingSenderId: "47101004564",
    appId: "1:47101004564:web:6757402bd2aa0761a55001",
    measurementId: "G-Z65HQQP4PM"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)

export default {
  firebase,
  db
};