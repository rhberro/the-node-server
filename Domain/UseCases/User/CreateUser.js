const UserRepository = require('Infra/repositories/UserRepository')

module.exports = async function CreateUser (data) {
  return UserRepository.create(data)
}
