import firebase from 'firebase'
// import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDVpymZQLr9n9VjZy0btMZGOiZ6GCvXY-s",
  authDomain: "peter-answers-ucup.firebaseapp.com",
  databaseURL: "https://peter-answers-ucup.firebaseio.com",
  projectId: "peter-answers-ucup",
  storageBucket: "peter-answers-ucup.appspot.com",
  messagingSenderId: "352259750996",
  appId: "1:352259750996:web:7cb4c7c91d2696c0"
};

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
export default db