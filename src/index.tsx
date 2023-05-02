import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

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

const container = document.getElementById("root");
createRoot(container!).render(<App />);
