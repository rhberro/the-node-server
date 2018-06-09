const AuthenticateUser = require('Domain/UseCases/User/AuthenticateUser')
const CreateUser = require('Domain/UseCases/User/CreateUser')

function respondWithSuccess (response, data) {
  return response.status(201).send(data)
}

function respondWithError (response, data) {
  return response.status(400).send(data)
}

module.exports = {
  authenticateUserAction: async function (request, response) {
    const { body } = request

    try {
      const user = await AuthenticateUser(body)
      respondWithSuccess(response, user)
    } catch (error) {
      respondWithError(response, error)
    }
  },
  createUserAction: async function (request, response) {
    const { body } = request

    try {
      const user = await CreateUser(body)
      respondWithSuccess(response, user)
    } catch (error) {
      respondWithError(response, error)
    }
  }
}
