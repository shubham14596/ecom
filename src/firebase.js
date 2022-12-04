import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBAwBgARxvEsgNRKi6dlg3e-ijhwPHZqFs",
    authDomain: "ecommerce-4a2b4.firebaseapp.com",
    projectId: "ecommerce-4a2b4",
    storageBucket: "ecommerce-4a2b4.appspot.com",
    messagingSenderId: "318440103713",
    appId: "1:318440103713:web:b7932824a9b4c647cde860"
  };

const app = initializeApp(firebaseConfig);
export default app
export const auth = getAuth(app);