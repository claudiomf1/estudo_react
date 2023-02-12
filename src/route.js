import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./components/pages/Home/index.js"
import CadastroGeral from "./components/pages/CadastroGeral/cadastro-geral.js"
import CadastroGeralPE from "./components/pages/CadastroGeral/cadastro-geral-pesquisa-e-edicao.js"

function AppRoutes() {
   return (
      <Routes>
         <Route path="*" element={<Home />} />
         <Route path="/home" element={<Home />} />
         <Route path="/cadastro-geral" element={<CadastroGeral />} />
         <Route
            path="/cadastro-geral-pesquisa-e-edicao"
            element={<CadastroGeralPE />}
         />
      </Routes>
   )
}

export default AppRoutes
