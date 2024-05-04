function ErrorAPI (statusCode, success, messages) {
   
   let infoApi = {
      statusCode: statusCode,
      success: success,
      messages: messages
   }

   return infoApi
}

export default ErrorAPI
