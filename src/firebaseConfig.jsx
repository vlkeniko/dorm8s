// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoPb5z32FbNb28qBUbiZZBsyJEkkxkKk8",
  authDomain: "dorm8s.firebaseapp.com",
  projectId: "dorm8s",
  storageBucket: "dorm8s.appspot.com",
  messagingSenderId: "211099924018",
  appId: "1:211099924018:web:eda3e05e8384dbfbeeae2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);