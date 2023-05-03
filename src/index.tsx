import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// if ("serviceWorker" in navigator) {
//     window.addEventListener("load", () => {
//         navigator.serviceWorker
//             .register("/service-worker.js")
//             .then((registration) => {
//                 console.log("SW registered", registration);
//             })
//             .catch((error) => {
//                 console.log("SW register failed", error);
//             });
//     });
// }

const firebaseConfig = {
    apiKey: "AIzaSyA5b9rx782vn1uD6Vy-xhQYim7bq4M1Ppg",
    authDomain: "matam-33c48.firebaseapp.com",
    projectId: "matam-33c48",
    storageBucket: "matam-33c48.appspot.com",
    messagingSenderId: "181079805319",
    appId: "1:181079805319:web:e3d002fa2304157fcf5722",
    measurementId: "G-H2KHSCXS3V",
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const container = document.getElementById("root");
createRoot(container!).render(<App />);
