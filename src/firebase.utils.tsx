import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBgr1XSIQm5ydSgOIAPFvlgNa-UG54yYmk",
  authDomain: "board-rank.firebaseapp.com",
  projectId: "board-rank",
  storageBucket: "board-rank.appspot.com",
  messagingSenderId: "47989076113",
  appId: "1:47989076113:web:021691286042dcf6780f30",
  measurementId: "G-GQ6PF1HMNC",
};

export const fbase = initializeApp(firebaseConfig);
export const auth = getAuth();
