
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkYwZPEQ0ZrqJLX-FhNCyiUaUqsZqzLLA",
  authDomain: "db-bl-quiz.firebaseapp.com",
  projectId: "db-bl-quiz",
  storageBucket: "db-bl-quiz.firebasestorage.app",
  messagingSenderId: "536237692867",
  appId: "1:536237692867:web:fd16aabe97b2e7ac694f76",
  measurementId: "G-0KKYVYDMLE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);