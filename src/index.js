import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyDE8VM1A4o0qMu2M-I3gwI4CX0u-HwLuUE",
    authDomain: "tess-7b1d8.firebaseapp.com",
    projectId: "tess-7b1d8",
    storageBucket: "tess-7b1d8.appspot.com",
    messagingSenderId: "405891970237",
    appId: "1:405891970237:web:05d9470bba0431e27973d4"
});
const auth = getAuth(firebaseApp);
onAuthStateChanged(auth, user => {
    if (user != null) {
        console.log('logged in!');
    } else {
        console.log('no user');
    }
});
