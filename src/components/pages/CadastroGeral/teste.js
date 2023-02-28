// function gRun(callback, parametro = "", minhafuncao) {
//    console.log("parametro =>", parametro)
//    console.log("minhafuncao =>", minhafuncao)
//    console.log("google.script.run =>  ", google.script.run)
//    google.script.run
//       .withSuccessHandler(callback)
//       .withFailureHandler((error) => $("#loading").hide())
//       [minhafuncao](parametro)
// }

function App() {
   const [cep, setCep] = useState("")
   const [address, setAddress] = useState({})

   const handleCepChange = (event) => {
      setCep(event.target.value)
   }

   const handleSubmit = (event) => {
      event.preventDefault()
      axios
         .get(`https://viacep.com.br/ws/${cep}/json/`)
         .then((response) => {
            setAddress(response.data)
         })
         .catch((error) => {
            console.log(error)
         })
   }

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <label>
               CEP:
               <input type="text" value={cep} onChange={handleCepChange} />
            </label>
            <button type="submit">Buscar</button>
         </form>
         {address.logradouro && (
            <div>
               <p>{address.logradouro}</p>
               <p>{address.bairro}</p>
               <p>
                  {address.localidade} - {address.uf}
               </p>
            </div>
         )}
      </div>
   )
}
