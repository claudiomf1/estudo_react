import React from "react"
import { useEffect, useState } from "react"

import { FormGroup, Row, Col, Button } from "react-bootstrap"

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

import { handleSubmit } from "./cadastro-eventos.js"
import { getUfNameByValue } from "../../../../utils/address-utils.js"
import { MyContext } from "/src/components/pages/CadastroGeral/cadastro-geral-context.js"
import { filterMunicipiosByCidade } from "./cadastro-fields.js"
import { EventosEstados } from "./cadastro-fields.js"
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
   const [isBlurred, setisBlurred] = useState(false)

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
   const [pegarCep, setpegarCep] = useState(true)
   const [cidadeSelecionada, setCidadeSelecionada] = useState("")

   UsersEfects(
      isValidCep,
      cep,
      setAddress,
      uf,
      cidade,
      endereco,
      setCep,
      setisValidCep,
      pegarCep,
      setpegarCep,
      setTodosMunicipios,
      setUfs,
      setMunicipiosParaOSelectSource,
      Municipios,
      setTitle,
      cidadeSelecionada,
      (data) => {
         setCidadeSelecionada(data.localidade)
         setCidade(data.localidade)
      }
   )

   function setAddress(data) {
      setpegarCep(false)
      setEndereco(data.logradouro)
      setBairro(data.bairro)
      setTodosMunicipios(todosMunicipiosBrasil()) // atualiza o estado
      setUf(getUfNameByValue(data.uf))
      setCidade(data.localidade)
      setCidadeSelecionada(data.localidade) // adicionado para atualizar a cidadeSelecionada

      const municipiosDaCidade = filterMunicipiosByCidade(
         todosMunicipios,
         data.localidade,
         ufs
      )
      // filtra os municípios correspondentes à UF e cidade selecionadas
      setMunicipios(municipiosDaCidade)
      setTitle(data.localidade) // adicionado para atualizar o título
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
         pegarCep,
         setpegarCep,
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
         setisBlurred,
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
         cidadeSelecionada,
         setCidadeSelecionada,
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
         pegarCep,
         setpegarCep,
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
         setisBlurred,
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
         cidadeSelecionada,
         setCidadeSelecionada,
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
                  isBlurred={isBlurred}
                  setShowAlertCep={setShowAlertCep}
               />
               <ShowAlertEmail
                  message="Por favor, insira um endereço de email válido!"
                  showAlert_email={showAlert_email}
                  isBlurred={isBlurred}
                  setShowAlertEmail={setShowAlertEmail}
               />
               <ShowAlertTel
                  message="Por favor, insira um número de telefone válido"
                  showAlert_tel={showAlert_tel}
                  isBlurred={isBlurred}
                  setShowAlertTel={setShowAlertTel}
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
                        <CpfImput cpf={cpf} isValidCpf={isValidCpf} />
                     </Col>
                  </Row>

                  <Row>
                     <Col md={4} className="mb-3">
                        <TelefoneImput
                           telefone={telefone}
                           isValidTel={isValidTel}
                        />
                     </Col>
                     <Col md={7} className="mb-3">
                        <EmailImput
                           email={email}
                           setEmail={setEmail}
                           isValidEmail={isValidEmail}
                        />
                     </Col>
                  </Row>

                  <Row>
                     <Col md={2} className="mb-3" style={{ display: "flex" }}>
                        <CepImput cep={cep} isValidCep={isValidCep} />
                     </Col>
                  </Row>

                  <Row>
                     <Col md={5} className="mb-3">
                        <EnderecoImput endereco={endereco}></EnderecoImput>
                     </Col>
                     <Col md={2} className="mb-3">
                        <NumeroImput numero={numero}></NumeroImput>
                     </Col>
                     <Col md={4} className="mb-3">
                        <ComplementoImput
                           complemento={complemento}
                        ></ComplementoImput>
                     </Col>
                  </Row>

                  <Row>
                     <Col md={5} className="mb-3">
                        <BairroImput bairro={bairro}></BairroImput>
                     </Col>
                     <Col md={3} className="mb-3">
                        <MunicipiosSelect
                           title={title}
                           setCidadeSelecionada={setCidadeSelecionada}
                        ></MunicipiosSelect>
                     </Col>
                     <Col md={4} className="mb-3">
                        <EstadosSelect
                           uf={uf}
                           setUf={setUf}
                           ufs={ufs}
                           setMunicipios={setMunicipios}
                           setTitle={setTitle}
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
function UsersEfects(
   isValidCep,
   cep,
   setAddress,
   uf,
   cidade,
   endereco,
   setCep,
   setisValidCep,
   pegarCep,
   setpegarCep,
   setTodosMunicipios,
   setUfs,
   setMunicipiosParaOSelectSource,
   Municipios,
   setTitle,
   cidadeSelecionada,
   setCidadeSelecionada
) {
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

      if (endereco !== "" && cidade !== "" && uf !== "" && pegarCep) {
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

      setTitle(pegarCep === false ? cidadeSelecionada : "Escolha a cidade")
   }, [Municipios, cidadeSelecionada])
}

async function verificaCidadePorCep(cep, cidadeSelecionada) {
   try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
      const data = await response.json()

      // verifica se o nome da cidade obtido na requisição é o mesmo que foi selecionado pelo usuário
      if (data.localidade.toLowerCase() !== cidadeSelecionada.toLowerCase()) {
         throw new Error(
            `CEP inválido para a cidade selecionada (${cidadeSelecionada})`
         )
      }
   } catch (error) {
      console.error(error)
   }
}
