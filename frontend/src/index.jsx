import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from "react-redux"
import store from './redux/store.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer bodyStyle={{ fontFamily: "Roboto" }} />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
