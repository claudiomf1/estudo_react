import React, { useContext, useEffect } from "react"
import { FormSelect, FormControl } from "react-bootstrap"
import SelectSourch from "../../../SelectSearch/SelectSearch.js"

import { masks } from "../../../../utils/masks.js"
import { MyContext } from "/src/components/pages/CadastroGeral/cadastro-geral-context.js"
export function SelectSexo() {
   const { sexo, setSexo } = useContext(MyContext)

   const handleSexoChange = (event) => {
      setSexo(event.target.value)
   }

   return (
      <FormSelect id="select-sexo" value={sexo} onChange={handleSexoChange}>
         <option defaultValue>Escolha o sexo...</option>
         <option value="feminino">Feminino</option>
         <option value="masculino">Masculino</option>
      </FormSelect>
   )
}

export function SelectTipo() {
   const { tipoPessoa, setTipoPessoa } = useContext(MyContext)
   const handleTipoPessoaChange = (event) => {
      setTipoPessoa(event.target.value)
   }
   return (
      <FormSelect
         id="select-tipo"
         value={tipoPessoa}
         onChange={handleTipoPessoaChange}
      >
         <option defaultValue>Escolha o tipo...</option>
         <option>Pessoa Física</option>
         <option>Pessoa Jurídica</option>
      </FormSelect>
   )
}

export function SelectCategoria() {
   const { categoria, setCategoria } = useContext(MyContext)
   const handleCategoriaChange = (event) => {
      setCategoria(event.target.value)
   }
   return (
      <FormSelect
         id="select-categoria"
         value={categoria}
         onChange={handleCategoriaChange}
      >
         <option defaultValue>Escolha o Categoria...</option>
         <option>Cliente</option>
         <option>Fornecedor</option>
         <option>Funcionário</option>
      </FormSelect>
   )
}

export function ImputName() {
   const { nome, setNome } = useContext(MyContext)
   const handleNomeChange = (event) => {
      setNome(event.target.value)
   }

   return (
      <FormControl
         id="input-name"
         placeholder="Nome"
         value={nome}
         onChange={handleNomeChange}
      />
   )
}

export function SobrenomeImput() {
   const { sobrenome, setSobrenome } = useContext(MyContext)
   const handleSobrenomeChange = (event) => {
      setSobrenome(event.target.value)
   }
   return (
      <FormControl
         id="input-sname"
         placeholder="Sobrenome"
         value={sobrenome}
         onChange={handleSobrenomeChange}
      />
   )
}

export function CpfImput() {
   const {
      cpf,
      setCpf,
      isValidCpf,
      setisValidCpf,
      isBlurred,
      setisBlurred,
      setShowAlertCPF,
      showAlert_cpf,
   } = useContext(MyContext)
   const { handleCpfChange, handleCpfBlur } = EventosCPF(
      setCpf,
      setisValidCpf,
      setisBlurred,
      setShowAlertCPF
   )
   return (
      <FormControl
         id="input-cpf"
         placeholder="CPF"
         value={cpf}
         onChange={handleCpfChange}
         onBlur={handleCpfBlur}
         className={isValidCpf ? "" : "invalid-filed"}
      />
   )
}

function EventosCPF(setCpf, setisValidCpf, setisBlurred, setShowAlertCPF) {
   const handleCpfChange = (event) => {
      const value = event.target.value
      const maskedValue = masks.cpf(value)

      setCpf(maskedValue || value)
      setisValidCpf(maskedValue && maskedValue.length === 14)
   }

   const handleCpfBlur = (event) => {
      const value = event.target.value
      const maskedValue = masks.cpf(value)

      setisBlurred(true)

      if (maskedValue && maskedValue.length === 14) {
         setCpf(maskedValue)
         setisValidCpf(true)
         setShowAlertCPF(false)
      } else if (value.length > 0) {
         setisValidCpf(false)
         setShowAlertCPF(true)
      }
   }
   return { handleCpfChange, handleCpfBlur }
}

export function TelefoneImput() {
   const {
      telefone,
      setTelefone,
      isValidTel,
      setisValidTel,
      setisBlurred,
      setShowAlertTel,
   } = useContext(MyContext)
   const { handleTelefoneChange, handleTelefoneBlur } = EventosTelefone(
      setTelefone,
      setisValidTel,
      setisBlurred,
      setShowAlertTel
   )
   return (
      <FormControl
         noValidate={true}
         id="cd-fone"
         placeholder="(XX) XXXX-XXXX"
         type="tel"
         pattern="\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}"
         value={telefone}
         onChange={handleTelefoneChange}
         onBlur={handleTelefoneBlur}
         className={isValidTel ? "" : "invalid-filed"}
      />
   )
}

function EventosTelefone(
   setTelefone,
   setisValidTel,
   setisBlurred,
   setShowAlertTel
) {
   const handleTelefoneChange = (event) => {
      const value = event.target.value
      const maskedValue = masks.phone(value)
      setTelefone(maskedValue || value)
      setisValidTel(maskedValue && maskedValue.length === 15)
   }

   const handleTelefoneBlur = (event) => {
      const value = event.target.value
      const maskedValue = masks.phone(value)

      setisBlurred(true)
      if (maskedValue && maskedValue.length === 15) {
         setTelefone(maskedValue)
         setisValidTel(true)
         setShowAlertTel(false)
      } else if (value.length > 0) {
         setisValidTel(false)
         setShowAlertTel(true)
      }
   }
   return { handleTelefoneChange, handleTelefoneBlur }
}

export function EmailImput() {
   const {
      email,
      setEmail,
      isValidEmail,
      setisValidEmail,
      setisBlurred,
      setShowAlertEmail,
      originalEmail,
      setOriginalEmail,
   } = useContext(MyContext)

   const { handleEmailBlur, handleEmailFocus } = EventosEmail(
      setisBlurred,
      setisValidEmail,
      setShowAlertEmail,
      setEmail,
      setOriginalEmail,
      originalEmail
   )
   return (
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
   )
}

function EventosEmail(
   setisBlurred,
   setisValidEmail,
   setShowAlertEmail,
   setEmail,
   setOriginalEmail,
   originalEmail
) {
   const handleEmailBlur = (event) => {
      const value = event.target.value
      const maskedValue = masks.email(value)
      setisBlurred(true)
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
   return { handleEmailBlur, handleEmailFocus }
}

export function CepImput() {
   const {
      cep,
      setCep,
      isValidCep,
      setisValidCep,
      setShowAlertCep,
      showAlert_cep,
      setisBlurred,
      isBlurred,
   } = useContext(MyContext)
   const { handleCepChange, handleCepBlur } = EventosCep(
      setCep,
      setisValidCep,
      setisBlurred,
      setShowAlertCep,
      showAlert_cep,
      isBlurred
   )
   return (
      <FormControl
         id="input-cep"
         placeholder="Cep"
         pattern="[0-9]{8}"
         value={cep}
         onChange={handleCepChange}
         onBlur={handleCepBlur}
         className={isValidCep ? "" : "invalid-filed"}
         style={{
            marginRight: "10px",
         }}
      />
   )
}

function EventosCep(
   setCep,
   setisValidCep,
   setisBlurred,
   setShowAlertCep,
   showAlert_cep,
   isBlurred
) {
   const handleCepChange = (event) => {
      const value = event.target.value
      const maskedValue = masks.cep(value)
      setCep(maskedValue || value)
      setisValidCep(maskedValue && maskedValue.length === 9)
   }

   const handleCepBlur = (event) => {
      const value = event.target.value
      const maskedValue = masks.cep(value)

      setisBlurred(true)

      if (maskedValue && maskedValue.length === 9) {
         setCep(maskedValue)
         setisValidCep(true)

         setShowAlertCep(false)
      } else if (value.length > 0) {
         setisValidCep(false)

         setShowAlertCep(true)
      }
   }
   return { handleCepChange, handleCepBlur }
}

export function EnderecoImput() {
   const { endereco, setEndereco, setUf, setCep } = useContext(MyContext)
   const handleEnderecoChange = (event) => {
      setUf("")
      setCep("")
      setEndereco(event.target.value)
   }
   return (
      <FormControl
         id="end"
         placeholder="Endereço"
         value={endereco}
         onChange={handleEnderecoChange}
      />
   )
}

export function NumeroImput() {
   const { numero, setNumero } = useContext(MyContext)
   const handleNumeroChange = (event) => {
      setNumero(event.target.value)
   }
   return (
      <FormControl
         id="numero"
         placeholder="N°"
         value={numero}
         onChange={handleNumeroChange}
      />
   )
}

export function ComplementoImput() {
   const { complemento, setComplemento } = useContext(MyContext)
   const handleComplementoChange = (event) => {
      setComplemento(event.target.value)
   }
   return (
      <FormControl
         id="complemento"
         placeholder="Complemento"
         value={complemento}
         onChange={handleComplementoChange}
      />
   )
}

export function BairroImput() {
   const { bairro, setBairro } = useContext(MyContext)
   const handleBairroChange = (event) => {
      setBairro(event.target.value)
   }

   return (
      <FormControl
         id="bairro"
         placeholder="Bairro"
         value={bairro}
         onChange={handleBairroChange}
      />
   )
}

export function MunicipiosSelect({ setCidadeSelecionada }) {
   const {
      municipios,
      title,
      setTitle,
      MunicipiosParaOSelectSource,
      setMunicipiosParaOSelectSource,
      cidadeSelecionada,
      setCidade,
      pegarCep,
   } = useContext(MyContext)

   const titulo = cidadeSelecionada ? cidadeSelecionada : title // utilizando cidadeSelecionada como título
   console.log("title", title)
   console.log("cidadeSelecionada", cidadeSelecionada)
   let isLoading = true
   if (!pegarCep) isLoading = false

   return (
      <>
         <SelectSourch
            titulo={titulo}
            initialData={MunicipiosParaOSelectSource}
            maxHeight={235}
            classDropdownToggle="classDropdownToggle"
            isLoading={isLoading}
         />
      </>
   )
}

export function EstadosSelect() {
   const {
      ufs,
      uf,
      setUf,
      municipios,
      setMunicipios,
      setTitle,
      todosMunicipios,
      cidade,
      setpegarCep,
      setCidadeSelecionada,
   } = useContext(MyContext)

   const handleUfChange = EventosEstados(todosMunicipios)
   return (
      <>
         <select
            id="uf"
            className="form-select"
            value={uf}
            style={{
               width: "74%",
            }}
            onChange={(event) =>
               handleUfChange(
                  event,
                  //   titulo_padrao_selectsourch,
                  setUf,
                  ufs,
                  setMunicipios,
                  setTitle,
                  cidade,
                  setpegarCep,
                  setCidadeSelecionada
               )
            }
         >
            {ufs.map((uf) => (
               <option key={uf.value} value={uf.label}>
                  {uf.label}
               </option>
            ))}
         </select>
         {municipios && municipios.length > 0 && (
            <MunicipiosSelect title={cidade} municipios={municipios} />
         )}
      </>
   )
}
export function EventosEstados(todosMunicipios) {
   return (
      event,
      //  titulo_padrao_selectsourch,
      setUf,
      ufs,
      setMunicipios,
      setTitle,
      cidade,
      setpegarCep,
      setCidadeSelecionada
   ) => {
      setpegarCep(true)
      setCidadeSelecionada("")
      const newUf = event.target.value
      setUf(newUf)

      const municipiosDaCidade = filterMunicipiosByCidade(
         todosMunicipios,
         newUf,
         ufs
      )

      setMunicipios(municipiosDaCidade)

      // setTitle(titulo_padrao_selectsourch)
   }
}
//--------------------funções auxiliares-------------------------------------------------------------------------------
function getCodigoMunicipioByCidade(cidadeSelecionada, ufs) {
   const ufsSelecionadas = ufs.filter((uf) => uf.label === cidadeSelecionada)

   if (ufsSelecionadas.length > 0) {
      return ufsSelecionadas[0].codigo
   } else {
      return null
   }
}
export function filterMunicipiosByCidade(
   todosMunicipios,
   cidadeSelecionada,
   ufs
) {
   const codigoMunicipio = getCodigoMunicipioByCidade(cidadeSelecionada, ufs)

   if (!codigoMunicipio) {
      return []
   }
   return todosMunicipios.filter(
      (municipio) =>
         municipio.codigo_uf.toString() === codigoMunicipio.toString()
   )
}
