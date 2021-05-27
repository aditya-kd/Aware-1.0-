import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBwoEUfgVZKPmwg4HSz9VqPBGNUhNZFdGA",
  authDomain: "awareprj-a91f2.firebaseapp.com",
  databaseURL: "https://awareprj-a91f2-default-rtdb.firebaseio.com",
  projectId: "awareprj-a91f2",
  storageBucket: "awareprj-a91f2.appspot.com",
  messagingSenderId: "18983992364",
  appId: "1:18983992364:web:2ad43a511591f81a1fe589",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
