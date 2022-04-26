import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCkhDgx6_vP-WF_pVG5zymDcpJujanxjkU",
  authDomain: "quitter2-1af24.firebaseapp.com",
  projectId: "quitter2-1af24",
  storageBucket: "quitter2-1af24.appspot.com",
  messagingSenderId: "1053249492456",
  appId: "1:1053249492456:web:b9756afbfa233e3739405d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// access firebase database with db variable
const db = firebase.firestore()

export default db

