'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {})
    */
    return queryInterface.bulkInsert('users', [
        {
          id: 1,
          active: true,
          email: 'customer@gmail.com',
          name: 'Customer',
          password: '01911345e57c3e87f0acf03a5f941650f19d9fde19f82da4bdd9bbeb60100320a297e1bf8a2b980dffc1cdfdbf398c0c7ba1283c3e262190a4d124fb508f63b3',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          active: true,
          email: 'professional@gmail.com',
          name: 'Professional',
          password: '112cf83920784f221b199d22365f967f7682300f8f3f1d3d68b96dd2779f418b23c46440f97d273db26c195d6c98270979e7ddbe62ce47699d1678e273ab4057',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    )
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {})
    */
    return queryInterface.bulkDelete('users', null)
  }
}
