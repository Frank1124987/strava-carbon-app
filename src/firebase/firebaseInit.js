import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBWT46shDFP54kxHEjERoYuX3mKwk35v9I",
    authDomain: "strava-27de1.firebaseapp.com",
    projectId: "strava-27de1",
    storageBucket: "strava-27de1.appspot.com",
    messagingSenderId: "363112846515",
    appId: "1:363112846515:web:e09890085e79c275f30cc6",
    measurementId: "G-DFCV2B03PB"
  };
  
  
const app = initializeApp(firebaseConfig);
export {app}