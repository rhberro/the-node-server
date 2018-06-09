module.exports = function Professional (sequelize, DataTypes) {
  const Professional = sequelize.define('professional', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      userId: {
        type: DataTypes.INTEGER
      }
    },
    {
      timestamps: true
    }
  )

  Professional.associate = function associate (models) {
    const { User } = models
    Professional.belongsTo(User);
  }

  return Professional
}
