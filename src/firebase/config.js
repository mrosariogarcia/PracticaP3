import app from "firebase/app";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAIr8yOVo6wr2BMtHVxjXvcQwPZC7_LuMY",
  authDomain: "proba-84f26.firebaseapp.com",
  projectId: "proba-84f26",
  storageBucket: "proba-84f26.firebasestorage.app",
  messagingSenderId: "841845265482",
  appId: "1:841845265482:web:42cbabae9bc8206bb182b3"
};

app.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const storage = app.storage();
export const db = app.firestore();