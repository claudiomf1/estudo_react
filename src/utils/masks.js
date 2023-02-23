export const masks = {
   cpf(value) {
      return value
         .replace(/\D/g, "")
         .replace(/(\d{3})(\d)/, "$1.$2")
         .replace(/(\d{3})(\d)/, "$1.$2")
         .replace(/(\d{3})(\d{1,2})/, "$1-$2")
         .replace(/(-\d{2})\d+?/, "$1")
   },
   cnpj(value) {
      return value
         .replace(/\D/g, "")
         .replace(/(\d{2})(\d)/, "$1.$2")
         .replace(/(\d{3})(\d)/, "$1.$2")
         .replace(/(\d{3})(\d)/, "$1/$2")
         .replace(/(\d{4})(\d)/, "$1-$2")
         .replace(/(-\d{2})\d+?/, "$1")
   },
   phone(value) {
      return value
         .replace(/\D/g, "")
         .replace(/(\d{2})(\d)/, "($1) $2")
         .replace(/(\d{4})(\d)/, "$1-$2")
         .replace(/(\d{4})-(\d)(\d{4})/, "$1$2-$3")
         .replace(/(-\d{4})\d+?/, "$1")
   },
   cep(value) {
      return value
         .replace(/\D/g, "")
         .replace(/(\d{5})(\d)/, "$1-$2")
         .replace(/(-\d{3})\d+?/, "$1")
   },
   email(value) {
      const emailRegex = /^([^\s@]+@[^\s@]+\.[^\s@]+)(?<!\.)$/
      if (!emailRegex.test(value)) {
         return null
      }
      return value.toLowerCase().trim()
   },
}
