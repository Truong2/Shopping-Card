import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./i18n";
import { Provider } from "react-redux";
import store from "./Redux/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={null}>
        <Provider store={store}>
          <App />
        </Provider>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
// import { useTranslation, initReactI18next } from "react-i18next";
// import i18n from "i18next";
// i18n.use(initReactI18next).init({
//   resources: {
//     vn: {
//       translation: {
//         "Welcome to React": "Chào mừng đến với React",
//       },
//     },
//     de: {
//       translation: {
//         "Welcome to React": "Willkomen bei",
//       },
//     },
//   },
//   lng: "vn",
//   fallbackLng: "en",
//   interpolation: {
//     escapeValue: false,
//   },
// });
