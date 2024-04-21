import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import './pages/style.css';
import reportWebVitals from './reportWebVitals';
import Main from './pages/Main.jsx';
import { Provider } from 'react-redux';
import { store } from './Redux/store.js';
import { AuthProvider } from './pages/store/Auth.jsx';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
  <React.StrictMode>
    <Provider store={store}>
      <Main />
        <ToastContainer  />
    </Provider>
  </React.StrictMode>
  </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
