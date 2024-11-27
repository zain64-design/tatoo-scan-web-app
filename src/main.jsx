import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import './app.scss'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>,
  </Provider>
)
