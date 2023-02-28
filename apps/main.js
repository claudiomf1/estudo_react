// const doGet = () => {
//    return HtmlService.createTemplateFromFile("index")
//       .evaluate()
//       .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
//       .addMetaTag("viewport", "width=device-width, initial-scale=1")
//       .setTitle("Estudo React")
// }

const doGet = (request) => {
   if (request.parameters.cep) {
      const cep = request.parameters.cep
      const data = fetchAddress(cep)
      return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(
         ContentService.MimeType.JSON
      )
   } else {
      return HtmlService.createTemplateFromFile("index")
         .evaluate()
         .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
         .addMetaTag("viewport", "width=device-width, initial-scale=1")
         .setTitle("Estudo React")
   }
}
