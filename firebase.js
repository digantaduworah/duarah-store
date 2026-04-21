const firebaseConfig = {
  apiKey: "AIzaSyBjJSoGkYlDjbPA0lqF-4yu9UWw6SpHTSQ",
  authDomain: "duarah-store.firebaseapp.com",
  projectId: "duarah-store",
  storageBucket: "duarah-store.firebasestorage.app",
  messagingSenderId: "67666768092",
  appId: "1:67666768092:web:2cbc90004c8a2a0aac4419",
  measurementId: "G-EV5KNZ22G5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
