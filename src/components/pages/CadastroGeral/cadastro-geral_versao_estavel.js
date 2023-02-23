import React, { useState } from "react"
import {
   FormGroup,
   Row,
   Col,
   Button,
   FormControl,
   FormSelect,
} from "react-bootstrap"

function CadastroGeral() {
   const [nome, setNome] = useState("")
   const [sobrenome, setSobrenome] = useState("")
   const [cpf, setCpf] = useState("")
   const [tipoPessoa, setTipoPessoa] = useState("")
   const [categoria, setCategoria] = useState("")
   const [sexo, setSexo] = useState("")
   const [telefone, setTelefone] = useState("")
   const [email, setEmail] = useState("")
   const [cep, setCep] = useState("")
   const [endereco, setEndereco] = useState("")
   const [numero, setNumero] = useState("")
   const [complemento, setComplemento] = useState("")
   const [bairro, setBairro] = useState("")
   const [cidade, setCidade] = useState("")
   const [uf, setUf] = useState("")

   const handleNomeChange = (event) => {
      setNome(event.target.value)
   }

   const handleSobrenomeChange = (event) => {
      setSobrenome(event.target.value)
   }

   const handleCpfChange = (event) => {
      setCpf(event.target.value)
   }

   const handleTipoPessoaChange = (event) => {
      setTipoPessoa(event.target.value)
   }

   const handleCategoriaChange = (event) => {
      setCategoria(event.target.value)
   }

   const handleSexoChange = (event) => {
      setSexo(event.target.value)
   }

   const handleTelefoneChange = (event) => {
      setTelefone(event.target.value)
   }

   const handleEmailChange = (event) => {
      setEmail(event.target.value)
   }

   const handleCepChange = (event) => {
      setCep(event.target.value)
   }

   const handleEnderecoChange = (event) => {
      setEndereco(event.target.value)
   }

   const handleNumeroChange = (event) => {
      setNumero(event.target.value)
   }

   const handleComplementoChange = (event) => {
      setComplemento(event.target.value)
   }

   const handleBairroChange = (event) => {
      setBairro(event.target.value)
   }

   const handleCidadeChange = (event) => {
      setCidade(event.target.value)
   }

   const handleUfChange = (event) => {
      setUf(event.target.value)
   }

   const handleSubmit = (event) => {
      event.preventDefault()

      // Aqui você pode fazer o envio dos dados para o servidor ou realizar outras ações necessárias
      // Limpa o formulário apó

      // Limpa o formulário após o envio dos dados
      setNome("")
      setSobrenome("")
      setCpf("")
      setTelefone("")
      setEmail("")
      setCep("")
      setEndereco("")
      setNumero("")
      setComplemento("")
      setBairro("")
      setCidade("")
      setUf("")
   }

   return (
      <div className="d-flex align-items-center" style={{ height: "100vh" }}>
         <div className="text-center mx-auto" style={{ maxWidth: "2000px" }}>
            <h2 style={{ marginBottom: "3rem" }}>NOVO CADASTRO GERAL</h2>
            <FormGroup>
               <Row>
                  <Col md={4} className="mb-3">
                     <FormSelect id="select-tipo">
                        <option selected>Escolha o tipo...</option>
                        <option>Pessoa Física</option>
                        <option>Pessoa Jurídica</option>
                     </FormSelect>
                  </Col>
                  <Col md={4} className="mb-3">
                     <FormSelect id="select-categoria">
                        <option selected>Escolha o Categoria...</option>
                        <option>Cliente</option>
                        <option>Fornecedor</option>
                        <option>Funcionário</option>
                     </FormSelect>
                  </Col>
                  <Col md={3} className="mb-3">
                     <FormSelect id="select-sexo">
                        <option selected>Escolha o sexo...</option>
                        <option>Feminino</option>
                        <option>Masculino</option>
                     </FormSelect>
                  </Col>
               </Row>

               <Row>
                  <Col md={4} className="mb-3">
                     <FormControl id="input-name" placeholder="Nome" />
                  </Col>
                  <Col md={5} className="mb-3">
                     <FormControl id="input-sname" placeholder="Sobre Nome" />
                  </Col>
                  <Col md={2} className="mb-3">
                     <FormControl id="input-cpf" placeholder="CPF" />
                  </Col>
               </Row>

               <Row>
                  <Col md={4} className="mb-3">
                     <FormControl id="cd-fone" placeholder="Fone" />
                  </Col>
                  <Col md={7} className="mb-3">
                     <FormControl
                        type="email"
                        id="input-email"
                        placeholder="E-mail"
                     />
                  </Col>
               </Row>

               <Row>
                  <Col md={4} className="mb-3">
                     <FormControl
                        id="input-cep"
                        placeholder="Cep somente números + (enter)"
                     />
                  </Col>
               </Row>

               <Row>
                  <Col md={5} className="mb-3">
                     <FormControl id="end" placeholder="Endereço" />
                  </Col>
                  <Col md={2} className="mb-3">
                     <FormControl id="numero" placeholder="N°" />
                  </Col>
                  <Col md={4} className="mb-3">
                     <FormControl id="complemento" placeholder="Complemento" />
                  </Col>
               </Row>

               <Row>
                  <Col md={6} className="mb-3">
                     <FormControl id="bairro" placeholder="Bairro" />
                  </Col>
                  <Col md={3} className="mb-3">
                     <FormControl id="cidade" placeholder="Cidade" />
                  </Col>
                  <Col md={2} className="mb-3">
                     <FormControl id="uf" placeholder="UF" />
                  </Col>
               </Row>

               <Row>
                  <Col md={12} className="mb-3">
                     <Button
                        variant="success"
                        type="submit"
                        style={{ width: "40%" }}
                     >
                        Cadastrar
                     </Button>
                  </Col>
               </Row>
            </FormGroup>
         </div>
      </div>
   )
}

export default CadastroGeral
