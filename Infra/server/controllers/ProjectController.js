const CreateProject = require('Domain/UseCases/Project/CreateProject')

function respondWithSuccess (response, data) {
  return response.status(201).send(data)
}

function respondWithError (response, data) {
  return response.status(400).send(data)
}

module.exports = {
  createProjectAction: async function (request, response) {
    const { body } = request

    try {
      const project = await CreateProject(body)
      respondWithSuccess(response, project)
    } catch (error) {
      respondWithError(response, error)
    }
  }
}
