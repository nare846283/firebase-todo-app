
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3t01FfPSwA2JLhssTTFDHNiXfckwf8fQ",
  authDomain: "fir-todo-app-af47c.firebaseapp.com",
  projectId: "fir-todo-app-af47c",
  storageBucket: "fir-todo-app-af47c.appspot.com",
  messagingSenderId: "64932738856",
  appId: "1:64932738856:web:b383c45cde42419426821d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
