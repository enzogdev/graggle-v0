import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import store from "./store/store.ts";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");
if (rootElement) {
  rootElement.classList.add("dark:bg-gray-900");
}

ReactDOM.createRoot(rootElement!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
