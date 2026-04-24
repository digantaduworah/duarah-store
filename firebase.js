// Your Firebase config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "XXXX",
  appId: "XXXX"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// 🔥 THIS IS THE FIX (db creation)
const db = firebase.firestore();

console.log("Firebase Connected");
