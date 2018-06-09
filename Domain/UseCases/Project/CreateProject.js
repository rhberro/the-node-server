const ProjectRepository = require('Infra/repositories/ProjectRepository')

module.exports = async function CreateProject (data) {
  return ProjectRepository.create(data)
}
