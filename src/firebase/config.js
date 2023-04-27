import app from 'firebase/app'
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBDr_NXEGSoJ1tmmfn02e-7cVCnMVWJJbE",
    authDomain: "newsletter-cv.firebaseapp.com",
    projectId: "newsletter-cv",
    storageBucket: "newsletter-cv.appspot.com",
    messagingSenderId: "79969949683",
    appId: "1:79969949683:web:323770b8f98a704b42e486"
};

app.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const storage = firebase.storage()
export const db = firebase.firestore()