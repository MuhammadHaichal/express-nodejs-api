function SuccessAPI (statusCode, success, messages, data) {
   
   let infoAPI = {
      statusCode: statusCode,
      success: success,
      messages: messages,
      data: data
   }

   return infoAPI
}

export default SuccessAPI
