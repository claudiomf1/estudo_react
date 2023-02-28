import React, { useState, useEffect } from "react"
import {
   Form,
   FormGroup,
   Row,
   Col,
   Button,
   FormLabel,
   FormControl,
   FormSelect,
   Alert,
} from "react-bootstrap"
//import Alert from "react-bootstrap/Alert"

import { masks } from "../../../utils/masks"

import { lookupAddress, lookupCep } from "/src/utils/address-utils.js"

//import "../../../components/styles.scss"

function CadastroGeral() {
   const [nome, setNome] = useState("")
   const [sobrenome, setSobrenome] = useState("")
   const [cpf, setCpf] = useState("")
   const [isValidCpf, setisValidCpf] = useState(true)
   const [tipoPessoa, setTipoPessoa] = useState("")
   const [categoria, setCategoria] = useState("")
   const [sexo, setSexo] = useState("")
   const [telefone, setTelefone] = useState("")
   const [email, setEmail] = useState("")
   const [originalEmail, setOriginalEmail] = useState("")
   const [isValidEmail, setisValidEmail] = useState(true)
   const [cep, setCep] = useState("")
   const [isValidCep, setisValidCep] = useState(true)
   const [endereco, setEndereco] = useState("")
   const [numero, setNumero] = useState("")
   const [complemento, setComplemento] = useState("")
   const [bairro, setBairro] = useState("")
   const [cidade, setCidade] = useState("")
   const [uf, setUf] = useState("")
   const [isBlurred, setIsBlurred] = useState(false)
   const [showAlert_cpf, setShowAlertCPF] = useState(false)
   const [showAlert_cep, setShowAlertCep] = useState(false)
   const [showAlert_email, setShowAlertEmail] = useState(false)
   const [showAlert_tel, setShowAlertTel] = useState(false)
   const [buscarCepAtivo, setBuscarCepAtivo] = useState(false)
   let address

   useEffect(() => {
      async function fetchData() {
         if (isValidCep && cep.length === 9) {
            const addressPromise = lookupAddress(cep)
            addressPromise
               .then((data) => {
                  setAddress(data)
               })
               .catch((error) => {
                  console.error("erro aqui ", error)
               })
         }
      }

      fetchData()
   }, [cep])

   useEffect(() => {
      const fetchCep = async () => {
         try {
            const data = await lookupCep(uf, cidade, endereco)
            if (typeof data.erro === "undefined" || !data.erro) {
               setCep(data[0].cep)
               setisValidCep(true)
            }
         } catch (error) {
            setisValidCep(false)
            setCep("")
            console.error(`Erro ao buscar CEP: ${error}`)
         }
      }

      if (endereco !== "" && cidade !== "" && uf !== "") {
         fetchCep()
      }
   }, [endereco, cidade, uf])

   const handleNomeChange = (event) => {
      setNome(event.target.value)
   }

   const handleSobrenomeChange = (event) => {
      setSobrenome(event.target.value)
   }
   const ShowAlertCPF = ({ message }) => {
      if (showAlert_cpf && isBlurred) {
         return (
            <Alert
               variant="danger"
               onClose={() => setShowAlertCPF(false)}
               dismissible
            >
               {message}
            </Alert>
         )
      }
      return null
   }

   const ShowAlertCep = ({ message }) => {
      if (showAlert_cep && isBlurred) {
         return (
            <Alert
               variant="danger"
               onClose={() => setShowAlertCep(false)}
               dismissible
            >
               {message}
            </Alert>
         )
      }
      return null
   }

   const ShowAlertEmail = ({ message }) => {
      if (showAlert_email && isBlurred) {
         return (
            <Alert
               variant="danger"
               onClose={() => setShowAlertEmail(false)}
               dismissible
            >
               {message}
            </Alert>
         )
      }
      return null
   }

   const ShowAlertTel = ({ message }) => {
      if (showAlert_tel && isBlurred) {
         return (
            <Alert
               variant="danger"
               onClose={() => setShowAlertTel(false)}
               dismissible
            >
               {message}
            </Alert>
         )
      }
      return null
   }

   const handleCpfChange = (event) => {
      const value = event.target.value
      const maskedValue = masks.cpf(value)

      setCpf(maskedValue || value)
      setisValidCpf(maskedValue && maskedValue.length === 14)
   }

   function setAddress(data) {
      setEndereco(data.logradouro)
      setBairro(data.bairro)
      setCidade(data.localidade)
      setUf(data.uf)
   }

   const handleCpfBlur = (event) => {
      const value = event.target.value
      const maskedValue = masks.cpf(value)
      setIsBlurred(true)

      if (maskedValue && maskedValue.length === 14) {
         setCpf(maskedValue)
         setisValidCpf(true)
         setShowAlertCPF(false)
      } else if (value.length > 0) {
         setisValidCpf(false)
         setShowAlertCPF(true)
      }
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
      const value = event.target.value
      const maskedValue = masks.phone(value)
      setTelefone(maskedValue || value)
      setisValidTel(maskedValue && maskedValue.length === 15)
   }

   const handleTelefoneBlur = (event) => {
      const value = event.target.value
      const maskedValue = masks.phone(value)

      setIsBlurred(true)
      if (maskedValue && maskedValue.length === 15) {
         setTelefone(maskedValue)
         setisValidTel(true)
         setShowAlertTel(false)
      } else if (value.length > 0) {
         setisValidTel(false)
         setShowAlertTel(true)
      }
   }

   const handleEmailBlur = (event) => {
      const value = event.target.value
      const maskedValue = masks.email(value)
      setIsBlurred(true)
      if (!maskedValue && value.length > 0) {
         setisValidEmail(false)
         setShowAlertEmail(true)
      } else {
         setEmail(maskedValue)
         setisValidEmail(true)
         setShowAlertEmail(false)
      }

      setOriginalEmail(value)
   }

   const handleEmailFocus = (event) => {
      const value = originalEmail

      setOriginalEmail(value)
   }

   const handleCepChange = (event) => {
      const value = event.target.value
      const maskedValue = masks.cep(value)
      setCep(maskedValue || value)
      setisValidCep(maskedValue && maskedValue.length === 9)
   }

   const handleCepBlur = (event) => {
      const value = event.target.value
      const maskedValue = masks.cep(value)
      if (maskedValue && maskedValue.length === 9) {
         setCep(maskedValue)
         setisValidCep(true)

         setShowAlertCep(false)
      } else if (value.length > 0) {
         setisValidCep(false)

         setShowAlertCep(true)
      }
   }

   const handleEnderecoChange = (event) => {
      setUf("")
      setCep("")
      setEndereco(event.target.value)
   }

   const handleEnderecoKeyUp = (event) => {
      //  checkInputs()
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

   const handleCidadeKeyUp = (event) => {
      //  checkInputs()
   }

   const handleUfChange = (event) => {
      setUf(event.target.value)
   }
   const handleUfKeyUp = (event) => {
      //  checkInputs()
   }

   const handleBuscarCep = async (event, uf, cidade, endereco) => {
      event.preventDefault()

      //      setIsValidAddress(true)

      try {
         console.log("uf =>", uf)
         console.log("cidade =>", cidade)
         console.log("endereco =>", endereco)

         const data = await lookupCep(uf, cidade, endereco)
         console.log("data =>", data)
         if (typeof data.erro === "undefined" || !data.erro) {
            setCep(data[0].cep)
            setisValidCep(true)
         }
      } catch (error) {
         setCep("")
         console.error(`Erro ao buscar CEP: ${error}`)
      }
   }

   const handleSubmit = (event) => {
      event.preventDefault()

      // Aqui você pode fazer o envio dos dados para o servidor ou realizar outras ações necessárias
      onSave()

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

   function checkInputs() {
      if (endereco !== "" && cidade !== "" && uf !== "") {
         // Habilita o botão de busca de CEP
         setBuscarCepAtivo(true)
      } else {
         // Desabilita o botão de busca de CEP
         setBuscarCepAtivo(false)
      }
   }

   return (
      <div className="d-flex align-items-center" style={{ height: "100vh" }}>
         <div className="text-center mx-auto" style={{ maxWidth: "2000px" }}>
            <h2 style={{ marginBottom: "3rem" }}>NOVO CADASTRO GERAL</h2>
            <ShowAlertCPF message="Por favor, insira   um número de CPF válido" />
            <ShowAlertCep message="Por favor, insira um número de CEP válido" />
            <ShowAlertEmail message="Por favor, insira um endereço de email válido!" />
            <ShowAlertTel message="Por favor, insira um número de telefone válido" />
            <FormGroup>
               <Row>
                  <Col md={4} className="mb-3">
                     <FormSelect
                        id="select-tipo"
                        value={tipoPessoa}
                        onChange={handleTipoPessoaChange}
                     >
                        <option selected>Escolha o tipo...</option>
                        <option>Pessoa Física</option>
                        <option>Pessoa Jurídica</option>
                     </FormSelect>
                  </Col>
                  <Col md={4} className="mb-3">
                     <FormSelect
                        id="select-categoria"
                        value={categoria}
                        onChange={handleCategoriaChange}
                     >
                        <option selected>Escolha o Categoria...</option>
                        <option>Cliente</option>
                        <option>Fornecedor</option>
                        <option>Funcionário</option>
                     </FormSelect>
                  </Col>
                  <Col md={3} className="mb-3">
                     <FormSelect
                        id="select-sexo"
                        value={sexo}
                        onChange={handleSexoChange}
                     >
                        <option selected>Escolha o sexo...</option>
                        <option value="feminino">Feminino</option>
                        <option value="masculino">Masculino</option>
                     </FormSelect>
                  </Col>
               </Row>

               <Row>
                  <Col md={4} className="mb-3">
                     <FormControl
                        id="input-name"
                        placeholder="Nome"
                        value={nome}
                        onChange={handleNomeChange}
                     />
                  </Col>
                  <Col md={5} style={{ maxWidth: "349px" }} className="mb-3">
                     <FormControl
                        id="input-sname"
                        placeholder="Sobrenome"
                        value={sobrenome}
                        onChange={handleSobrenomeChange}
                     />
                  </Col>
                  <Col md={3} style={{ maxWidth: "160px" }} className="mb-3">
                     <FormControl
                        id="input-cpf"
                        placeholder="CPF"
                        value={cpf}
                        onChange={handleCpfChange}
                        onBlur={handleCpfBlur}
                        className={isValidCpf ? "" : "invalid-filed"}
                     />
                  </Col>
               </Row>

               <Row>
                  <Col md={4} className="mb-3">
                     <FormControl
                        noValidate={true}
                        id="cd-fone"
                        placeholder="(XX) XXXX-XXXX"
                        type="tel"
                        pattern="\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}"
                        value={telefone}
                        onChange={handleTelefoneChange}
                        onBlur={handleTelefoneBlur}
                        // className={isValidTel ? "" : "invalid-filed"}
                     />
                  </Col>
                  <Col md={7} className="mb-3">
                     <FormControl
                        type="email"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                        id="input-email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        onBlur={handleEmailBlur}
                        onFocus={handleEmailFocus}
                        className={isValidEmail ? "" : "invalid-filed"}
                     />
                  </Col>
               </Row>

               <Row>
                  <Col md={2} className="mb-3" style={{ display: "flex" }}>
                     <FormControl
                        id="input-cep"
                        placeholder="Cep"
                        pattern="[0-9]{8}"
                        value={cep}
                        onChange={handleCepChange}
                        onBlur={handleCepBlur}
                        className={isValidCep ? "" : "invalid-filed"}
                        style={{ marginRight: "10px" }}
                     />
                  </Col>
                  {/* <Col md={2} className="mb-3">
                     <Button
                        type="submit"
                        variant="outline-primary"
                        style={{ width: "100%" }}
                        className={
                           buscarCepAtivo ? "" : "disabled-button disabled"
                        }
                        onClick={(event) =>
                           handleBuscarCep(event, uf, cidade, endereco)
                        }
                     >
                        Buscar CEP
                     </Button>
                  </Col> */}
               </Row>

               <Row>
                  <Col md={5} className="mb-3">
                     <FormControl
                        id="end"
                        placeholder="Endereço"
                        value={endereco}
                        onChange={handleEnderecoChange}
                        onKeyUp={handleEnderecoKeyUp}
                     />
                  </Col>
                  <Col md={2} className="mb-3">
                     <FormControl
                        id="numero"
                        placeholder="N°"
                        value={numero}
                        onChange={handleNumeroChange}
                     />
                  </Col>
                  <Col md={4} className="mb-3">
                     <FormControl
                        id="complemento"
                        placeholder="Complemento"
                        value={complemento}
                        onChange={handleComplementoChange}
                     />
                  </Col>
               </Row>

               <Row>
                  <Col md={6} className="mb-3">
                     <FormControl
                        id="bairro"
                        placeholder="Bairro"
                        value={bairro}
                        onChange={handleBairroChange}
                     />
                  </Col>
                  <Col md={3} className="mb-3">
                     <FormControl
                        id="cidade"
                        placeholder="Cidade"
                        value={cidade}
                        onChange={handleCidadeChange}
                        onKeyUp={handleCidadeKeyUp}
                     />
                  </Col>
                  <Col md={2} className="mb-3">
                     <FormControl
                        id="uf"
                        placeholder="UF"
                        value={uf}
                        onChange={handleUfChange}
                        onKeyUp={handleUfKeyUp}
                        maxLength={2}
                     />
                  </Col>
               </Row>

               <Row>
                  <Col md={12} className="mb-3">
                     <Button
                        variant="success"
                        type="submit"
                        style={{ width: "40%" }}
                        onClick={handleSubmit}
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
