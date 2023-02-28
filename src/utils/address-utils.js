export const lookupAddress = async (cep) => {
   let cepSemHifen = cep.replace("-", "")
   let url = "https://viacep.com.br/ws/" + cepSemHifen + "/json/"

   const response = await fetch(url)
   const data = await response.json()
   return data
}

export const lookupCep = async (uf, cidade, endereco) => {
   try {
      let url =
         "https://viacep.com.br/ws/" +
         encodeURIComponent(uf) +
         "/" +
         encodeURIComponent(cidade) +
         "/" +
         encodeURIComponent(endereco) +
         "/json/"

      const response = await fetch(url)
      const data = await response.json()
      return data
   } catch (error) {
      console.error(`Erro ao buscar CEP: ${error}`)
      throw new Error(
         "Não foi possível buscar o CEP. Por favor, tente novamente mais tarde."
      )
   }
}
