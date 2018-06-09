const { json } = require('body-parser')
const cors = require('cors')
const express = require('express')

const configureRoutes = require('Infra/server/initialization/routes')

function configureMiddlewares (api) {
  const parserMiddleware = json(
    {
      limit: '50mb'
    }
  )

  const corsMiddleware = cors(
    {
      origin: true,
      credentials: true
    }
  )

  api.use(parserMiddleware)
  api.use(corsMiddleware)
}

function configureEndpoints (api, router) {
  const routes = configureRoutes(api, router)
  api.use('/', routes);
}

module.exports = function configureExpress () {
  const api = express()
  const router = express.Router()

  configureMiddlewares(api)
  configureEndpoints(api, router)

  api.listen(8000, function () {
      console.log('Server up and running on port %s.', 8000);
    }
  )
}
