import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "FAKE_API_KEY_1234567890ABCDEFGHIJKLMN",
  authDomain: "mi-proyecto-ficticio.firebaseapp.com",
  projectId: "mi-proyecto-ficticio",
  storageBucket: "mi-proyecto-ficticio.appspot.com",
  messagingSenderId: "123456789000",
  appId: "1:123456789000:web:abcdef1234567890abcdef"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
