const doGet = () => {
   return HtmlService.createTemplateFromFile("index")
      .evaluate()
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
      .addMetaTag("viewport", "width=device-width, initial-scale=1")
      .setTitle("Estudo React")
}
