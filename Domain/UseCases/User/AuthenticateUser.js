const UserRepository = require('Infra/repositories/UserRepository')

module.exports = async function AuthenticateUser (data) {
  const { email, password } = data
  const user = await UserRepository.findByEmail(email)
  return user && user.authenticate(password)
}
