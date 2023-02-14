import React from "react"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import AppRoutes from "./route.js"

function App() {
   const navigate = useNavigate()

   function handleCadastroGeralClick() {
      navigate({ to: "/cadastro-geral" })
   }
   return (
      <div>
         <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Meu Projeto</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="mr-auto">
                  <Nav.Link as={Link} to="/">
                     Home
                  </Nav.Link>

                  <Nav.Link
                     as={Link}
                     to="/cadastro-geral"
                     onClick={handleCadastroGeralClick}
                  >
                     Cadastro Geral
                  </Nav.Link>
                  <Nav.Link as={Link} to="/cadastro-geral-pesquisa-e-edicao">
                     Cadastro Geral Pesquisa e Edição
                  </Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Navbar>
         <AppRoutes />
      </div>
   )
}

export default App
