import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-js7FKREgWKaKqA40ljwP5ge7vkXYiq8",
  authDomain: "prime-video-clone-dc5e5.firebaseapp.com",
  projectId: "prime-video-clone-dc5e5",
  storageBucket: "prime-video-clone-dc5e5.appspot.com",
  messagingSenderId: "711877541134",
  appId: "1:711877541134:web:56cced94e7b73b5a1ceb5f",
  measurementId: "G-PLMQB2EZVB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);