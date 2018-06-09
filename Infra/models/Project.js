module.exports = function Project (sequelize, DataTypes) {
  const Project = sequelize.define('project', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      }
    },
    {
      timestamps: true,
      indexes: [
        { unique: true, fields: ['name'] }
      ]
    }
  )

  return Project
}
