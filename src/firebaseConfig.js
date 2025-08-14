import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAw_7U5I_dkfa9Qps-PVgvg_hZYoRRHLU0",
  authDomain: "profe-73865.firebaseapp.com",
  projectId: "profe-73865",
  storageBucket: "profe-73865.firebasestorage.app",
  messagingSenderId: "459766711938",
  appId: "1:459766711938:web:fabb09da52ff926b9a969b",
};

const miAppBackend = initializeApp(firebaseConfig);

// ACA QUEDA REFERENCIADO EL BACKEND MIO
export const db = getFirestore(miAppBackend);
