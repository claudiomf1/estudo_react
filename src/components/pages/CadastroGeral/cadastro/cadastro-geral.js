import React from "react"
import { useContext, useEffect } from "react"
import React, { useState, createContext } from "react"

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

import {
   lookupAddress,
   lookupCep,
   getAllUfs,
} from "/src/utils/address-utils.js"

import { todosMunicipiosBrasil } from "../../../../utils/municipios.js"

import {
   ShowAlertCPF,
   ShowAlertCep,
   ShowAlertEmail,
   ShowAlertTel,
} from "./cadastro-alerts"

import {
   SelectSexo,
   SelectTipo,
   SelectCategoria,
   ImputName,
   SobrenomeImput,
   CpfImput,
   TelefoneImput,
   EmailImput,
   CepImput,
   EnderecoImput,
   NumeroImput,
   ComplementoImput,
   BairroImput,
   MunicipiosSelect,
   EstadosSelect,
} from "./cadastro-fields.js"

import {
   handleNomeChange,
   handleSobrenomeChange,
   handleCpfChange,
   handleCpfBlur,
   handleTipoPessoaChange,
   handleCategoriaChange,
   handleSexoChange,
   handleTelefoneChange,
   handleTelefoneBlur,
   handleEmailChange,
   handleEmailBlur,
   handleCepChange,
   handleCepBlur,
   handleEnderecoChange,
   handleEnderecoKeyUp,
   handleNumeroChange,
   handleComplementoChange,
   handleBairroChange,
   handleCidadeChange,
   handleUfChange,
   handleUfKeyUp,
   handleSubmit,
   handleEmailFocus,
} from "./cadastro-eventos.js"

import { GeralContext } from "/src/utils/react/context.js"
import { MyContext } from "/src/components/pages/CadastroGeral/cadastro-geral-provider.js"
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
   const [ufs, setUfs] = useState([])
   const [isBlurred, setIsBlurred] = useState(false)
   const [showAlert_cpf, setShowAlertCPF] = useState(false)
   const [showAlert_cep, setShowAlertCep] = useState(false)
   const [showAlert_email, setShowAlertEmail] = useState(false)
   const [showAlert_tel, setShowAlertTel] = useState(false)
   const [buscarCepAtivo, setBuscarCepAtivo] = useState(false)
   const [Municipios, setMunicipios] = useState([])
   const [codigoUf, setCodigoUf] = useState("")
   const [todosMunicipios, setTodosMunicipios] = useState([])
   const [isValidTel, setisValidTel] = useState(true)
   const [MunicipiosParaOSelectSource, setMunicipiosParaOSelectSource] =
      useState([])
   const [title, setTitle] = useState("Escolha a cidade")

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

   useEffect(() => {
      try {
         setTodosMunicipios(todosMunicipiosBrasil())
         setUfs(getAllUfs())
      } catch (error) {
         console.error(error)
         // aqui você pode adicionar código para lidar com o erro
      }
   }, [])

   useEffect(() => {
      setMunicipiosParaOSelectSource(function () {
         const nomesMunicipios = Municipios.map((municipio) => [municipio.nome])
         return nomesMunicipios
      })

      setTitle("Escolha a cidade ")
   }, [Municipios])

   function setAddress(data) {
      setEndereco(data.logradouro)
      setBairro(data.bairro)
      setCidade(data.localidade)
      setUf(data.uf)
   }
   const contextValue = React.useMemo(
      () => ({
         nome,
         setNome,
         sobrenome,
         setSobrenome,
         cpf,
         setCpf,
         isValidCpf,
         setisValidCpf,
         tipoPessoa,
         setTipoPessoa,
         categoria,
         setCategoria,
         sexo,
         setSexo,
         telefone,
         setTelefone,
         email,
         setEmail,
         originalEmail,
         setOriginalEmail,
         isValidEmail,
         setisValidEmail,
         cep,
         setCep,
         isValidCep,
         setisValidCep,
         endereco,
         setEndereco,
         numero,
         setNumero,
         complemento,
         setComplemento,
         bairro,
         setBairro,
         cidade,
         setCidade,
         uf,
         setUf,
         ufs,
         setUfs,
         isBlurred,
         setIsBlurred,
         showAlert_cpf,
         setShowAlertCPF,
         showAlert_cep,
         setShowAlertCep,
         showAlert_email,
         setShowAlertEmail,
         showAlert_tel,
         setShowAlertTel,
         buscarCepAtivo,
         setBuscarCepAtivo,
         Municipios,
         setMunicipios,
         codigoUf,
         setCodigoUf,
         todosMunicipios,
         setTodosMunicipios,
         isValidTel,
         setisValidTel,
         MunicipiosParaOSelectSource,
         setMunicipiosParaOSelectSource,
         title,
         setTitle,
      }),
      [
         nome,
         setNome,
         sobrenome,
         setSobrenome,
         cpf,
         setCpf,
         isValidCpf,
         setisValidCpf,
         tipoPessoa,
         setTipoPessoa,
         categoria,
         setCategoria,
         sexo,
         setSexo,
         telefone,
         setTelefone,
         email,
         setEmail,
         originalEmail,
         setOriginalEmail,
         isValidEmail,
         setisValidEmail,
         cep,
         setCep,
         isValidCep,
         setisValidCep,
         endereco,
         setEndereco,
         numero,
         setNumero,
         complemento,
         setComplemento,
         bairro,
         setBairro,
         cidade,
         setCidade,
         uf,
         setUf,
         ufs,
         setUfs,
         isBlurred,
         setIsBlurred,
         showAlert_cpf,
         setShowAlertCPF,
         showAlert_cep,
         setShowAlertCep,
         showAlert_email,
         setShowAlertEmail,
         showAlert_tel,
         setShowAlertTel,
         buscarCepAtivo,
         setBuscarCepAtivo,
         Municipios,
         setMunicipios,
         codigoUf,
         setCodigoUf,
         todosMunicipios,
         setTodosMunicipios,
         isValidTel,
         setisValidTel,
         MunicipiosParaOSelectSource,
         setMunicipiosParaOSelectSource,
         title,
         setTitle,
      ]
   )

   return (
      <MyContext.Provider value={contextValue}>
         <div className="d-flex align-items-center" style={{ height: "100vh" }}>
            <div className="text-center mx-auto" style={{ maxWidth: "2000px" }}>
               <h2 style={{ marginBottom: "3rem" }}>NOVO CADASTRO GERAL</h2>

               <ShowAlertCPF
                  message="Por favor, insira   um número de CPF válido"
                  showAlert_cpf={showAlert_cpf}
                  isBlurred={isBlurred}
                  setShowAlertCPF={setShowAlertCPF}
               />

               <ShowAlertCep
                  message="Por favor, insira um número de CEP válido"
                  showAlert_cep={showAlert_cep}
               />
               <ShowAlertEmail
                  message="Por favor, insira um endereço de email válido!"
                  showAlert_email={showAlert_email}
               />
               <ShowAlertTel
                  message="Por favor, insira um número de telefone válido"
                  showAlert_tel={showAlert_tel}
               />
               <FormGroup>
                  <Row>
                     <Col md={4} className="mb-3">
                        <SelectTipo />
                     </Col>
                     <Col md={4} className="mb-3">
                        <SelectCategoria />
                     </Col>
                     <Col md={3} className="mb-3">
                        <SelectSexo />
                     </Col>
                  </Row>

                  <Row>
                     <Col md={4} className="mb-3">
                        <ImputName />
                     </Col>
                     <Col md={5} style={{ maxWidth: "349px" }} className="mb-3">
                        <SobrenomeImput />
                     </Col>
                     <Col md={3} style={{ maxWidth: "160px" }} className="mb-3">
                        <CpfImput
                           cpf={cpf}
                           isValidCpf={isValidCpf}
                           handleCpfChange={handleCpfChange}
                           handleCpfBlur={handleCpfBlur}
                        />
                     </Col>
                  </Row>

                  <Row>
                     <Col md={4} className="mb-3">
                        <TelefoneImput
                           telefone={telefone}
                           isValidTel={isValidTel}
                           handleTelefoneChange={handleTelefoneChange}
                           handleTelefoneBlur={handleTelefoneBlur}
                        />
                     </Col>
                     <Col md={7} className="mb-3">
                        <EmailImput
                           email={email}
                           setEmail={setEmail}
                           isValidEmail={isValidEmail}
                           handleEmailChange={handleEmailChange}
                           handleEmailBlur={handleEmailBlur}
                           handleEmailFocus={handleEmailFocus}
                        />
                     </Col>
                  </Row>

                  <Row>
                     <Col md={2} className="mb-3" style={{ display: "flex" }}>
                        <CepImput
                           cep={cep}
                           isValidCep={isValidCep}
                           handleCepChange={handleCepChange}
                           handleCepBlur={handleCepBlur}
                        ></CepImput>
                     </Col>
                  </Row>

                  <Row>
                     <Col md={5} className="mb-3">
                        <EnderecoImput
                           endereco={endereco}
                           handleEnderecoChange={handleEnderecoChange}
                           handleEnderecoKeyUp={handleEnderecoKeyUp}
                        ></EnderecoImput>
                     </Col>
                     <Col md={2} className="mb-3">
                        <NumeroImput
                           numero={numero}
                           handleNumeroChange={handleNumeroChange}
                        ></NumeroImput>
                     </Col>
                     <Col md={4} className="mb-3">
                        <ComplementoImput
                           complemento={complemento}
                           handleComplementoChange={handleComplementoChange}
                        ></ComplementoImput>
                     </Col>
                  </Row>

                  <Row>
                     <Col md={5} className="mb-3">
                        <BairroImput
                           bairro={bairro}
                           handleBairroChange={handleBairroChange}
                        ></BairroImput>
                     </Col>
                     <Col md={3} className="mb-3">
                        <MunicipiosSelect
                           title={title}
                           handleCidadeChange={handleCidadeChange}
                        ></MunicipiosSelect>
                     </Col>
                     <Col md={4} className="mb-3">
                        <EstadosSelect
                           uf={uf}
                           setUf={setUf}
                           ufs={ufs}
                           setMunicipios={setMunicipios}
                           setTitle={setTitle}
                           handleUfChange={handleUfChange}
                           handleUfKeyUp={handleUfKeyUp}
                        ></EstadosSelect>
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
      </MyContext.Provider>
   )
}

export default CadastroGeral
