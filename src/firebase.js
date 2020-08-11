import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD3jdiUwtjVSBZfocFdXURsoKbAIyTInXc",
  authDomain: "tinder-clone-3493f.firebaseapp.com",
  databaseURL: "https://tinder-clone-3493f.firebaseio.com",
  projectId: "tinder-clone-3493f",
  storageBucket: "tinder-clone-3493f.appspot.com",
  messagingSenderId: "884104377115",
  appId: "1:884104377115:web:b79c563663ec70b9d159be",
  measurementId: "G-5TS2M7KL0B",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
