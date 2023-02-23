// export function getDataFromSheet(sheetId, range) {
//    const sheet = SpreadsheetApp.openById(sheetId).getSheetByName(range)
//    const rows = sheet.getDataRange().getValues()
//    const headers = rows.shift()
//    return rows.map((row) => {
//       return headers.reduce((obj, key, i) => ({ ...obj, [key]: row[i] }), {})
//    })
// }

// export function fetchAddress(cep) {
//    try {
//       let cepSemHifen = cep.replace("-", "")
//       const url = `https://viacep.com.br/ws/${cepSemHifen}/json/`
//       const response = UrlFetchApp.fetch(url)
//       const data = JSON.parse(response.getContentText())
//       if (!data.erro) {
//          return {
//             endereco: data.logradouro,
//             bairro: data.bairro,
//             cidade: data.localidade,
//             uf: data.uf,
//          }
//       }
//       return null
//    } catch (error) {
//       console.log("Ocorreu um erro ao buscar o :", error)
//       console.log("response =>", response)
//       return null
//    }
// }
