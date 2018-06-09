const { authenticateUserAction, createUserAction } = require('../controllers/UserController')
const { createCustomerAction } = require('../controllers/CustomerController')
const { createProfessionalAction } = require('../controllers/ProfessionalController')
const { createProjectAction } = require('../controllers/ProjectController')

module.exports = function configureRoutes (app, router) {
  router.post('/login', authenticateUserAction)

  router.post('/users', createUserAction)
  router.post('/customers', createCustomerAction)
  router.post('/professionals', createProfessionalAction)
  router.post('/projects', createProjectAction)

  return router
}
