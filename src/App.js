import React from "react"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

import { Link } from "react-router-dom"
<<<<<<< HEAD
import { useNavigate } from "react-router-dom"
import AppRoutes from "./route.js"

function App() {
   const navigate = useNavigate()

   function handleCadastroGeralClick() {
      navigate({ to: "/cadastro-geral" })
   }
=======
import AppRoutes from "./route.js"

function App() {
>>>>>>> a2d11fe9e48829a03c82fe06613a3794fb2a63f4
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
<<<<<<< HEAD

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
=======
                  <Nav.Link as={Link} to="/cadastro-geral">
                     Cadastro Geral
                  </Nav.Link>
>>>>>>> a2d11fe9e48829a03c82fe06613a3794fb2a63f4
               </Nav>
            </Navbar.Collapse>
         </Navbar>
         <AppRoutes />
      </div>
   )
}

export default App
