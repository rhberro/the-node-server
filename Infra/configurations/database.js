module.exports = {
  dialect: 'mysql',
  host: process.env.DATABASE_HOST || 'localhost',
  database: process.env.DATABASE_NAME || 'database',
  username: process.env.DATABASE_USERNAME || 'username',
  password: process.env.DATABASE_PASSWORD || 'password',
  port: process.env.DATABASE_PORT || 3306,
  logging: console.log,
  seederStorage: 'sequelize',
  operatorsAliases: false,
  define: {
    charset: 'utf8',
    dialectOptions: {
      collate: 'utf8_general_ci'
    }
  }
}
