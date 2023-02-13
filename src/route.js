import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./components/pages/Home/index.js"
import CadastroGeral from "./components/pages/CadastroGeral/cadastro-geral.js"
<<<<<<< HEAD
import CadastroGeralPE from "./components/pages/CadastroGeral/cadastro-geral-pesquisa-e-edicao.js"
=======
>>>>>>> a2d11fe9e48829a03c82fe06613a3794fb2a63f4

function AppRoutes() {
   return (
      <Routes>
         <Route path="*" element={<Home />} />
         <Route path="/home" element={<Home />} />
         <Route path="/cadastro-geral" element={<CadastroGeral />} />
<<<<<<< HEAD
         <Route
            path="/cadastro-geral-pesquisa-e-edicao"
            element={<CadastroGeralPE />}
         />
=======
>>>>>>> a2d11fe9e48829a03c82fe06613a3794fb2a63f4
      </Routes>
   )
}

export default AppRoutes
