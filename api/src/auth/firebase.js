// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import {getAuth } from 'firebase/auth';
const admin =require('firebase-admin')
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: FIREBASE_KEY,
  authDomain: FIREBASE_DOMAIN,
  projectId: FIREBASE_PROYECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_SENDER_ID,
  appId: FIREBASE_APP_ID
};
const clavePrivada = require('./firebase.json')
// Initialize Firebase
admin.initializeApp({
  credential: admin.credential.cert(clavePrivada),
  databaseURL: 'firebase-adminsdk-9565h@good-shoes.iam.gserviceaccount.com'
});
firebaseConfig.initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);
export const auth= getAuth();
export default getFirestore(app)

module.exports = {firebase, admin}