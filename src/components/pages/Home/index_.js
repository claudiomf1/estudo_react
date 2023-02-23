import React, { useState, useEffect } from "react"
import SelectSearch from "../../SelectSearch/SelectSearch"
import { google } from "googleapis"
//import { getDataFromSheet } from "/src/backend/google-apps-script.js"

function Home() {
   const [data, setData] = useState([])
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(null)

   useEffect(() => {
      const fetchData = async () => {
         try {
            const sheetId = "1DHcDn2eTzk6VNa3x3fhQ1X_RgTpGHfV09VWxHD2gk54"
            const range = "Clientes!C6:C"
            const functionName = "getDataFromSheet"

            const { data } = await google.script.run
               .withSuccessHandler(setData)
               .withFailureHandler(setError)
               [functionName](sheetId, range)

            setLoading(false)
         } catch (error) {
            setError(error)
            setLoading(false)
         }
      }

      fetchData()
   }, [])

   if (loading) {
      return <div>Loading...</div>
   }

   if (error) {
      return <div>Error!</div>
   }

   return (
      <>
         <h1>Rodando do VSCode projeto Apps Script com React TESTE</h1>
         <SelectSearch
            title="Escolha um cliente"
            initialData={data.map((c) => [c.CLIENTE])}
            sheetsOptions={[
               { id: "Clientes", headerRowIndex: 0, range: "C6:C7" },
            ]}
         />
      </>
   )
}

export default Home
