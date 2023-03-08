import React from "react"
import SelectSourch from "../../SelectSearch/SelectSearch"
import useGoogleSheets from "use-google-sheets"
// import { Container } from './styles';

function Home() {
   const {
      data: response,
      loading,
      error,
   } = useGoogleSheets({
      apiKey: "AIzaSyDs11gmvAQb2xdRL_fWVvhrTRKyz4NoZ5w",
      sheetId: "1DHcDn2eTzk6VNa3x3fhQ1X_RgTpGHfV09VWxHD2gk54",
      sheetsOptions: [{ id: "clientes", headerRowIndex: 4, range: "C6:C" }],
   })
   if (loading) {
      return <div>Loading...</div>
   }

   if (error) {
      return <div>Error!</div>
   }

   const [{ data }] = response

   return (
      <>
         <h1>Rodando do vscode projeto apps scricpt com react TESTE</h1>
         <SelectSourch
            titulo="Escolha um   cliente"
            initialData={data.map((c) => [c.CLIENTE])}
         />
      </>
   )
}

export default Home
