import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// here I want to import the seed file
// import { seedDatabase } from '../seed'


const config = {
    apiKey: "AIzaSyD0w-8CtEUCoO08AJBt-XzcxBdhCCDh-Io",
    authDomain: "instagram-k-25063.firebaseapp.com",
    projectId: "instagram-k-25063",
    storageBucket: "instagram-k-25063.appspot.com",
    messagingSenderId: "992064366545",
    appId: "1:992064366545:web:7f303e5a9b014d78dd22f0"
};

const firebase = Firebase.initializeApp(config);

const { FieldValue } = Firebase.firestore();

// here is where I want to call the seed file (ONLY ONCE)
// seedDatabase(firebase);

export { firebase, FieldValue };
