import municipios from "/src/utils/municipios"

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

export function getAllUfs() {
   return [
      { value: "", label: "UF", codigo: null },
      { value: "AC", label: "Acre", codigo: 12 },
      { value: "AL", label: "Alagoas", codigo: 27 },
      { value: "AP", label: "Amapá", codigo: 16 },
      { value: "AM", label: "Amazonas", codigo: 13 },
      { value: "BA", label: "Bahia", codigo: 29 },
      { value: "CE", label: "Ceará", codigo: 23 },
      { value: "DF", label: "Distrito Federal", codigo: 53 },
      { value: "ES", label: "Espírito Santo", codigo: 32 },
      { value: "GO", label: "Goiás", codigo: 52 },
      { value: "MA", label: "Maranhão", codigo: 21 },
      { value: "MT", label: "Mato Grosso", codigo: 51 },
      { value: "MS", label: "Mato Grosso do Sul", codigo: 50 },
      { value: "MG", label: "Minas Gerais", codigo: 31 },
      { value: "PA", label: "Pará", codigo: 15 },
      { value: "PB", label: "Paraíba", codigo: 25 },
      { value: "PR", label: "Paraná", codigo: 41 },
      { value: "PE", label: "Pernambuco", codigo: 26 },
      { value: "PI", label: "Piauí", codigo: 22 },
      { value: "RJ", label: "Rio de Janeiro", codigo: 33 },
      { value: "RN", label: "Rio Grande do Norte", codigo: 24 },
      { value: "RS", label: "Rio Grande do Sul", codigo: 43 },
      { value: "RO", label: "Rondônia", codigo: 11 },
      { value: "RR", label: "Roraima", codigo: 14 },
      { value: "SC", label: "Santa Catarina", codigo: 42 },
      { value: "SP", label: "São Paulo", codigo: 35 },
      { value: "SE", label: "Sergipe", codigo: 28 },
      { value: "TO", label: "Tocantins", codigo: 17 },
   ]
}

// export function getMunicipiosByUF(uf) {
//    // filtra a lista de municípios para retornar apenas os municípios do estado selecionado
//    const municipiosDoEstado = municipios.filter(
//       (municipio) => municipio.codigo_uf === uf
//    )

//    // cria uma lista de objetos com a label e o valor de cada município
//    const options = municipiosDoEstado.map((municipio) => ({
//       label: municipio.nome,
//       value: municipio.codigo_ibge,
//    }))

//    return options // retorna a lista de municípios
// }
