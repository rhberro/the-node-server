const CreateProfessional = require('Domain/UseCases/Professional/CreateProfessional')

function respondWithSuccess (response, data) {
  return response.status(201).send(data)
}

function respondWithError (response, data) {
  return response.status(400).send(data)
}

module.exports = {
  createProfessionalAction: async function (request, response) {
    const { body } = request

    try {
      const professional = await CreateProfessional(body)
      respondWithSuccess(response, professional)
    } catch (error) {
      respondWithError(response, error)
    }
  }
}
