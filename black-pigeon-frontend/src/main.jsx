import React from 'react'
import ReactDOM from 'react-dom/client'
import Map from './Map.jsx'
import './index.css'
import store from './app/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <Map />
    </React.StrictMode>,
  </Provider>

)
