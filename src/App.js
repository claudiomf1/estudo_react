import React from "react"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

import { Link } from "react-router-dom"
import AppRoutes from "./route.js"

function App() {
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
                  <Nav.Link as={Link} to="/cadastro-geral">
                     Cadastro Geral
                  </Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Navbar>
         <AppRoutes />
      </div>
   )
}

export default App
