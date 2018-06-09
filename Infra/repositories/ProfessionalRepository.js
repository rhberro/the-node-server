const { Professional, User } = require('../models/Models')

module.exports = {
  create: async function (data) {
    const options = { include: [ User ] }
    return Professional.create(data, options)
  }
}
