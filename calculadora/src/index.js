import './index.css'
import ReactDOM from 'react-dom/client'
import React from 'react'
import Calculator from './main/Calculator'

const el = document.getElementById('root')
const root = ReactDOM.createRoot(el)

root.render(
  <div>
    <h1>Calculadora</h1>
    <Calculator />
  </div>
)