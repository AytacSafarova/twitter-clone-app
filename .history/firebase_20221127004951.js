import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyCDtfBpRp01co5IcDuk2Ji2UqGVV2C9crI",
  authDomain: "twitter-clone-e740d.firebaseapp.com",
  projectId: "twitter-clone-e740d",
  storageBucket: "twitter-clone-e740d.appspot.com",
  messagingSenderId: "860462775848",
  appId: "1:860462775848:web:cffa89210a98bfe9eb3f1d"
};



const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };