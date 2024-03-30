
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCSRmTaPP4CyOdhFOKDycQOK9ZtX67s7W4",
  authDomain: "my-projects-dc68a.firebaseapp.com",
  projectId: "my-projects-dc68a",
  storageBucket: "my-projects-dc68a.appspot.com",
  messagingSenderId: "951422575003",
  appId: "1:951422575003:web:ceff7c251b3f531e89c13e",
  measurementId: "G-45PYJNXXNL"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth,provider}