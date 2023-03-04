import React, { useMemo, useState, createContext } from "react"

import GeralContext from "/src/utils/react/context.js"
const CadastroGeralProvider = ({ children }) => {
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

   const value = {
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
   }

   return (
      <GeralContext.Provider value={value}>{children}</GeralContext.Provider>
   )
}
export default CadastroGeralProvider

export const MyContext = createContext({
   isBlurred: false,
   setIsBlurred: () => {},
   showAlert_cpf: false,
   setShowAlertCPF: () => {},
   showAlert_cep: false,
   setShowAlertCep: () => {},
   showAlert_email: false,
   setShowAlertEmail: () => {},
   showAlert_tel: false,
   setShowAlertTel: () => {},
   message: "",
   setMessage: () => {},
   nome: "",
   setNome: () => {},
   sobrenome: "",
   setSobrenome: () => {},
   cpf: "",
   setCpf: () => {},
   isValidCpf: true,
   setisValidCpf: () => {},
   tipoPessoa: "",
   setTipoPessoa: () => {},
   categoria: "",
   setCategoria: () => {},
   sexo: "",
   setSexo: () => {},
   telefone: "",
   setTelefone: () => {},
   email: "",
   setEmail: () => {},
   originalEmail: "",
   setOriginalEmail: () => {},
   isValidEmail: true,
   setisValidEmail: () => {},
   cep: "",
   setCep: () => {},
   isValidCep: true,
   setisValidCep: () => {},
   endereco: "",
   setEndereco: () => {},
   numero: "",
   setNumero: () => {},
   complemento: "",
   setComplemento: () => {},
   bairro: "",
   setBairro: () => {},
   cidade: "",
   setCidade: () => {},
   uf: "",
   setUf: () => {},
   municipios: [],
   setMunicipios: () => {},
   ufs: [],
   setUfs: () => {},
})
