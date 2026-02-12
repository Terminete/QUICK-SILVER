import { BrowserRouter } from "react-router-dom";
import React from 'react'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AuthProvider } from './Context/AuthContext'
import { CartProvider } from './Context/CartContext'
import './index.css'
import App from './App'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <CartProvider>
      <App />
    </CartProvider>
    </AuthProvider>
  
  </React.StrictMode>
)
