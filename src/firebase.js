// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBenX01zxLhC1Cg9lVQhvTZDwKJ5HTEk6E",
  authDomain: "blog-app-12421.firebaseapp.com",
  projectId: "blog-app-12421",
  storageBucket: "blog-app-12421.firebasestorage.app",
  messagingSenderId: "849880193297",
  appId: "1:849880193297:web:f72305a55257451be394b0",
  measurementId: "G-WP0YCM56GE"
};

// Initialize Firebase
const firebaseConfigeApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseConfigeApp);

export default firebaseConfigeApp;