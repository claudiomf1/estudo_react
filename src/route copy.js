import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./components/pages/Home"
import CadastroGeral from "./components/pages/CadastroGeral/cadastro-geral"
// import "bootstrap/dist/css/bootstrap.min.css"

export default function Routes() {
   return (
      <Routes>
         <Route path="*" element={<Home />} />
         <Route path="/home" element={<Home />} />
         <Route path="/cadastro-geral" element={<CadastroGeral />} />
      </Routes>
   )
}
