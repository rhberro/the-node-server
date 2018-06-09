const CustomerRepository = require('Infra/repositories/CustomerRepository')

module.exports = async function CreateCustomer (data) {
  return CustomerRepository.create(data)
}
