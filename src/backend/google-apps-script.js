// export function getDataFromSheet(sheetId, range) {
//    const sheet = SpreadsheetApp.openById(sheetId).getSheetByName(range)
//    const rows = sheet.getDataRange().getValues()
//    const headers = rows.shift()
//    return rows.map((row) => {
//       return headers.reduce((obj, key, i) => ({ ...obj, [key]: row[i] }), {})
//    })
// }

// function fetchAddress(cep) {
//    let headers = {
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
//       "Access-Control-Allow-Headers": "Content-Type",
//    }

//    try {
//       console.log("cepppp =>", cep)
//       let cepSemHifen = cep.replace("-", "")
//       let url = "https://viacep.com.br/ws/" + cepSemHifen + "/json/"
//       let response = UrlFetchApp.fetch(url, { headers: headers })
//       let data = JSON.parse(response.getContentText())
//       if (!data.erro) {
//          return {
//             data: data,
//          }
//       }
//    } catch (error) {
//       console.log("Ocorreu um erro ao buscar o :", error)
//       console.log("response =>", response)
//       return null
//    }
// }

// export async function getAddressData(cep, fetchAddressFuncName) {
//    try {
//       console.log("cep =>", cep)
//       console.log("fetchAddressFuncName =>", fetchAddressFuncName)
//       const fetchAddressFunc = new Function("cep", fetchAddressFuncName)
//       const address = fetchAddressFunc(cep)
//       return address
//    } catch (error) {
//       console.log(
//          "Ocorreu um erro ao buscar o endereço no google apps script:",
//          error
//       )
//       return null
//    }
// }

// export function fetchAddress(cep) {
//    let url =
//       "https://script.google.com/macros/s/AKfycbw0-AQyQmgSbPiGrsPdLL_eWkpLVnK4m1mJuKgOk4If/dev?function=fetchAddress&cep=" +
//       cep
//    let response = UrlFetchApp.fetch(url)
//    let data = JSON.parse(response.getContentText())
//    return data
// }

// function AddressLookup() {
//     const [zipCode, setZipCode] = useState('');
//     const [address, setAddress] = useState('');

//     const handleZipCodeChange = (event) => {
//       setZipCode(event.target.value);
//     };

//import { fetch } from "google.script.run"

//     return (
//       <div>
//         <input type="text" value={zipCode} onChange={handleZipCodeChange} />
//         <button onClick={lookupAddress}>Lookup Address</button>
//         <p>{address}</p>
//       </div>
//     );
//   }

//   export default AddressLookup;
