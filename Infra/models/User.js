const crypto = require('crypto')

const { key } = require('Infra/configurations/application')

module.exports = function User (sequelize, DataTypes) {
  const User = sequelize.define('user', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
          notEmpty: true
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          notEmpty: true
        }
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      }
    },
    {
      timestamps: true,
      scopes: {
        active: {
          where: {
            active: true
          }
        },
        deactive: {
          where: {
            active: false
          }
        }
      },
      hooks: {
        beforeCreate: async function beforeCreate (user) {
          user.password = this.generateHash(user.password)
        }
      }
    }
  )

  User.associate = function associate (models) {
    const { Customer, Professional } = models
    User.hasOne(Customer)
    User.hasOne(Professional)
  }

  User.generateHash = function generateHash (password) {
    return crypto.createHmac('sha512', key)
      .update(password)
      .digest('hex')
  }

  User.prototype.toJSON = function toJSON () {
    const { password, ...safeProperties } = this.dataValues
    return safeProperties
  }

  User.prototype.authenticate = function authenticate (submitedPassword) {
    const { password: currentPasswordHash } = this.dataValues
    const submitedPasswordHash = User.generateHash(submitedPassword)
    return submitedPasswordHash === currentPasswordHash
  }

  return User
}
