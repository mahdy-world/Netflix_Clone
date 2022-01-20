import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDaedVcNyDmOypZHRacawEEXmGUvkhIyMY",
    authDomain: "netflix-clone-24174.firebaseapp.com",
    projectId: "netflix-clone-24174",
    storageBucket: "netflix-clone-24174.appspot.com",
    messagingSenderId: "57272766020",
    appId: "1:57272766020:web:d8d163c57e9fb81f663611"
};

const firbaseApp = initializeApp(firebaseConfig);
const db = getFirestore();


export {firbaseApp};
export default db;