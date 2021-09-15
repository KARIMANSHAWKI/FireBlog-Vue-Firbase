import { initializeApp } from "firebase/app";
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-Spfo54-jnW0fME18zjsyodAmGPCQDlc",
    authDomain: "fireblog-b3108.firebaseapp.com",
    projectId: "fireblog-b3108",
    storageBucket: "fireblog-b3108.appspot.com",
    messagingSenderId: "209427659505",
    appId: "1:209427659505:web:87a1a5981e2224f1338750"
  };

  const app = initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {timestamp};
  export default app.firestore();