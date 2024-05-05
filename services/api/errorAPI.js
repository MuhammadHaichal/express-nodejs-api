function ErrorAPI (statusCode, success, error) {
   
   let infoApi = {
      statusCode: statusCode,
      success: success,
      errors: error,
   }

   return infoApi
}

export default ErrorAPI
