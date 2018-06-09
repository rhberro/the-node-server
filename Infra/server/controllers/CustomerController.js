const CreateCustomer = require('Domain/UseCases/Customer/CreateCustomer')

function respondWithSuccess (response, data) {
  return response.status(201).send(data)
}

function respondWithError (response, data) {
  return response.status(400).send(data)
}

module.exports = {
  createCustomerAction: async function (request, response) {
    const { body } = request

    try {
      const customer = await CreateCustomer(body)
      respondWithSuccess(response, customer)
    } catch (error) {
      respondWithError(response, error)
    }
  }
}
