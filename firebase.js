import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

  let firebaseApp;
  let firebaseAuth;

useEffect(() => {
    let firebaseConfig = {
  apiKey: "AIzaSyDhx6JpGcbbOsz74VJgLKUgIpXK07HIOO4",
  authDomain: "pizzafeia-7bac9.firebaseapp.com",
  projectId: "pizzafeia-7bac9",
  storageBucket: "pizzafeia-7bac9.appspot.com",
  messagingSenderId: "458686236224",
  appId: "1:458686236224:web:d870ba8c610c405c2141a5",
  measurementId: "G-T5D0G4JX4X"
};
firebaseApp = initializeApp(firebaseConfig);
/*
firebaseAuth = initializeAuth(firebaseApp, {
  persistence: browserSessionPersistence,
  popupRedirectResolver: browserPopupRedirectResolver,
});
*/
firebaseAuth = getAuth();


onAuthStateChanged(firebaseAuth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log("User is signed in");

  } else {
    // User is signed out
    console.log("User is signed out");
  }
});

}, []);