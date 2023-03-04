import { Alert } from "react-bootstrap"
export const ShowAlertCPF = ({
   showAlert_cpf,
   message,
   isBlurred,
   setShowAlertCPF,
}) => {
   if (showAlert_cpf && isBlurred) {
      return (
         <Alert
            variant="danger"
            onClose={() => setShowAlertCPF(false)}
            dismissible
         >
            {message}
         </Alert>
      )
   }
   return null
}

export const ShowAlertCep = ({
   showAlert_cep,
   message,
   isBlurred,
   setShowAlertCep,
}) => {
   if (showAlert_cep && isBlurred) {
      return (
         <Alert
            variant="danger"
            onClose={() => setShowAlertCep(false)}
            dismissible
         >
            {message}
         </Alert>
      )
   }
   return null
}

export const ShowAlertEmail = ({
   showAlert_email,
   isBlurred,
   message,
   setShowAlertEmail,
}) => {
   if (showAlert_email && isBlurred) {
      return (
         <Alert
            variant="danger"
            onClose={() => setShowAlertEmail(false)}
            dismissible
         >
            {message}
         </Alert>
      )
   }
   return null
}

export const ShowAlertTel = ({
   showAlert_tel,
   message,
   isBlurred,
   setShowAlertTel,
}) => {
   if (showAlert_tel && isBlurred) {
      return (
         <Alert
            variant="danger"
            onClose={() => setShowAlertTel(false)}
            dismissible
         >
            {message}
         </Alert>
      )
   }
   return null
}
