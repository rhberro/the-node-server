const { Project } = require('../models/Models')

module.exports = {
  create: async function (data) {
    return Project.create(data)
  }
}
