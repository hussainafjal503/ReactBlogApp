import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "remixicon/fonts/remixicon.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from './redux/store.js'

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
 
      <Provider store={store}>
        <App />
      </Provider>
      <ToastContainer position="bottom-right" />
  
  </BrowserRouter>
);
