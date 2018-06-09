module.exports = function Customer (sequelize, DataTypes) {
  const Customer = sequelize.define('customer', {
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

  Customer.associate = function associate (models) {
    const { User } = models
    Customer.belongsTo(User);
  }

  return Customer
}
