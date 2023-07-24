import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import { ProductProvider } from './contexts/ProductContext';

import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ProductProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ProductProvider>
)
