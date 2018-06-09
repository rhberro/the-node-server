const Sequelize = require('sequelize')

const databaseConfiguration = require('Infra/configurations/database')

function connectionSucceed () {
  console.log('Database connection has been established successfully.')
}

function connectionFailed (error) {
  console.error('Unable to connect to the database: %s.', error)
}

const { database, dialect, host, logging, operatorsAliases, password, username } = databaseConfiguration

const options = { dialect, host, logging, operatorsAliases }

const databaseInstance = new Sequelize(database, username, password, options)

databaseInstance
  .authenticate()
  .then(connectionSucceed)
  .catch(connectionFailed)

const models = {
  Customer: databaseInstance.import('./Customer'),
  Professional: databaseInstance.import('./Professional'),
  Project: databaseInstance.import('./Project'),
  User: databaseInstance.import('./User')
}

Object.keys(models).forEach(
  function (model) {
    if (models[model].associate) {
      models[model].associate(models)
    }
  }
)

module.exports = models
