const { Customer, User } = require('../models/Models')

module.exports = {
  create: async function (data) {
    const options = { include: [ User ] }
    return Customer.create(data, options)
  }
}
