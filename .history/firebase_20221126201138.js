import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyB6zz-8HuFwB12bocIBTSb02Hw32uWIlTM",
  authDomain: "twitter-app-9a3e2.firebaseapp.com",
  projectId: "twitter-app-9a3e2",
  storageBucket: "twitter-app-9a3e2.appspot.com",
  messagingSenderId: "175227091861",
  appId: "1:175227091861:web:e754c932c7841f3e76d49c"
};


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };