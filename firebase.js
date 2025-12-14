const firebaseConfig = {
  apiKey: "AIzaSyDJq0GZNqI-aQX07BIzLkdvjJKLIdKUTzE",
  authDomain: "amigao-cotacoes.firebaseapp.com",
  projectId: "amigao-cotacoes",
  storageBucket: "amigao-cotacoes.firebasestorage.app",
  messagingSenderId: "1067537546004",
  appId: "1:1067537546004:web:938900636e4f9bffa9a001"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
