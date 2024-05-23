import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

// Libs
import { BrowserRouter } from "react-router-dom";
import { persistor, store } from './redux/store.jsx'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>,
      </PersistGate>
    </Provider>,
  </React.StrictMode>,
)
