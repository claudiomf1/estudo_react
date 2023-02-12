import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./components/pages/Home/index.js"
import CadastroGeral from "./components/pages/CadastroGeral/cadastro-geral.js"

function AppRoutes() {
   return (
      <Routes>
         <Route path="*" element={<Home />} />
         <Route path="/home" element={<Home />} />
         <Route path="/cadastro-geral" element={<CadastroGeral />} />
      </Routes>
   )
}

export default AppRoutes
