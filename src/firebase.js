import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC-v9mQegskOjnyL1SseECDbEc9YYI4_hA",
  authDomain: "gig-search-4c908.firebaseapp.com",
  projectId: "gig-search-4c908",
  storageBucket: "gig-search-4c908.appspot.com",
  messagingSenderId: "11670509740",
  appId: "1:11670509740:web:3ee6418bfc75b27bf16709",
  measurementId: "G-N1ZFDWT821",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
