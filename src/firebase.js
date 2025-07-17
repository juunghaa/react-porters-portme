import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA8cCVuBbjmgW_3_uC4BzmOLc1-EXkOtcM",
    authDomain: "feporter-b594b.firebaseapp.com",
    projectId: "feporter-b594b",
    storageBucket: "feporter-b594b.firebasestorage.app",
    messagingSenderId: "715146782615",
    appId: "1:715146782615:web:80ae06ccd0f81547de46d2",
    measurementId: "G-8XQH0FJFZ0"
};

const app = initializeApp(firebaseConfig); //파이어베이스 앱 초기화
export const auth = getAuth(app); //파이어베이스 인증기능 꺼내기 
export const provider = new GoogleAuthProvider();
