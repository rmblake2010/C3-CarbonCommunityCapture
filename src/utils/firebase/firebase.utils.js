// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth, signInWithRedirect, signInWithPopup,GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1kFMQY_2ZlMzP_3t-bzYLTlkkQWhSCbY",
  authDomain: "c3-carbon-capture-community.firebaseapp.com",
  projectId: "c3-carbon-capture-community",
  storageBucket: "c3-carbon-capture-community.appspot.com",
  messagingSenderId: "933983065809",
  appId: "1:933983065809:web:c8a078559e904adf4f97f0",
  measurementId: "G-XFK3GVG635"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)