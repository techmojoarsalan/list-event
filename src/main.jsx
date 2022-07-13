import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Products from './Products'
import TableData from './TableData'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <TableData/>
    <Products/>
  </React.StrictMode>
)
