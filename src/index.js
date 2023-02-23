import React from "react"
import ReactDOM from "react-dom"
// import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import App from "./App"

const container = document.getElementById("root")
if (!container) {
   throw new Error(
      "O container com ID #root não existe! Verifique seu index.html."
   )
}
const root = ReactDOM.createRoot(container)
root.render(
   <React.StrictMode>
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </React.StrictMode>
)
