import React from "react"
import { Navbar, Container, Button, FormControl, Table } from "react-bootstrap"
import { Link } from "react-router-dom"
function CadastroGeralPE() {
   window.addEventListener("load", function () {
      document
         .querySelector("#cadastro-geral")
         .addEventListener("submit", function (e) {
            e.preventDefault()
            const formData = new FormData(this)
            const url = formData.get("url")
            window.location.href = url
         })
   })
   return (
      <div>
         <Navbar bg="light" className="paddinglefright">
            <Container>
               <Navbar.Brand id="text-head-form">
                  Cadastro de Usuários
               </Navbar.Brand>
               <div className="d-flex">
                  <Link to="/cadastro-geral">
                     <Button>Cadastrar</Button>
                  </Link>
                  <FormControl
                     type="text"
                     placeholder="Pesquisa"
                     className="me-2"
                     id="searchInput"
                  />
               </div>
            </Container>
         </Navbar>

         <div className="form-cadastro">
            <div className="form">
               <Table striped bordered hover>
                  <thead>
                     <tr className="color-text-cinza mb-3">
                        <th>#</th>
                        <th>Nome</th>
                        <th>Fone</th>
                        <th>Email</th>
                        <th></th>
                        <th></th>
                        <th></th>
                     </tr>
                  </thead>
                  <tbody id="searchResults">
                     <tr>
                        <td className="se-IDt" scope="row"></td>
                        <td className="se-nome"></td>
                        <td className="se-fone"></td>
                        <td className="se-email"></td>
                        <td>
                           <Button variant="outline-warning">Editar</Button>
                        </td>
                        <td>
                           <Button variant="outline-danger">Excluir</Button>
                        </td>
                        <td>
                           <Button variant="outline-info">Visualizar</Button>
                        </td>
                     </tr>
                  </tbody>
               </Table>
            </div>
         </div>
      </div>
   )
}

export default CadastroGeralPE
