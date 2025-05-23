import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCMrYkbxgg31OLDN6K3GZaGH2RKBtoGvj0",
  authDomain: "nanmudhalvanportfolioproj.firebaseapp.com",
  projectId: "nanmudhalvanportfolioproj",
  storageBucket: "nanmudhalvanportfolioproj.firebasestorage.app",
  messagingSenderId: "436703194410",
  appId: "1:436703194410:web:6cd52338ea1a5ce57dc253"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
export default app;