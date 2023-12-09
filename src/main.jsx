import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDchnmIFNtbOgVcsVPbj3E_VqbLwYgTwzU",
  authDomain: "curso-react-coderhouse-82a8c.firebaseapp.com",
  projectId: "curso-react-coderhouse-82a8c",
  storageBucket: "curso-react-coderhouse-82a8c.appspot.com",
  messagingSenderId: "151818054033",
  appId: "1:151818054033:web:effe871930c939bf03d230"
};

initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)