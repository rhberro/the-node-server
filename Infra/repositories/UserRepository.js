const { User } = require('../models/Models')

module.exports = {
  create: async function (data) {
    return User.create(data)
  },
  findByEmail: async function (email) {
    const options = { where: { email } }
    return User.findOne(options)
  }
}
