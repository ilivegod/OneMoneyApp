import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCoQ8XHo1YbYpSoDo3WwpsPej_v7zsdTEE",
  authDomain: "onemoneyapp-76b6c.firebaseapp.com",
  projectId: "onemoneyapp-76b6c",
  storageBucket: "onemoneyapp-76b6c.appspot.com",
  messagingSenderId: "284112402015",
  appId: "1:284112402015:web:51dea0979b99ebb88e0dea",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
