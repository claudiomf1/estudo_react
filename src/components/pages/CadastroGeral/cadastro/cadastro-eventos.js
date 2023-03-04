export const handleMunicipioSelect = (event) => {
   const municipioSelecionado = event.target.textContent
   setTitulo(municipioSelecionado)
}

export const handleCidadeChange = (event) => {
   setCidade(event.target.value)
}

export const handleSubmit = (event) => {
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
