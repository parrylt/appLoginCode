import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAbCspt3HsP6PyR5jIegG2S5Y_fzYAYVoM",
  authDomain: "diariobd-ae542.firebaseapp.com",
  projectId: "diariobd-ae542",
  storageBucket: "diariobd-ae542.appspot.com",
  messagingSenderId: "859882068766",
  appId: "1:859882068766:web:4cb61cd0d81479f2abc70f"
};

const app = initializeApp(firebaseConfig);

export default app;