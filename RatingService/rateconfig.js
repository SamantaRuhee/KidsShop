const admin = require('firebase-admin')

const firebaseConfig = {
  apiKey: "AIzaSyDRjiwcuVN6vI4HC4fUDU9tXnJ_9DeVAgI",
  authDomain: "kidsproduct-16f40.firebaseapp.com",
  projectId: "kidsproduct-16f40",
  storageBucket: "kidsproduct-16f40.appspot.com",
  messagingSenderId: "484755474217",
  appId: "1:484755474217:web:90c36a8907d15c6b585938"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const serviceAccount = require('firebaseConfig')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
})

const db = admin.firestore()

module.exports = { admin, db }