export function getAddressData(cep) {
   let url = `https://viacep.com.br/ws/${cep}/json/`
   return fetch(url)
      .then((response) => response.json())
      .then((data) => {
         return {
            cep: data.cep,
            address: data.logradouro,
            complement: data.complemento,
            neighborhood: data.bairro,
            city: data.localidade,
            state: data.uf,
         }
      })
      .catch((error) => {
         console.error(error)
      })
}
