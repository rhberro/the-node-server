const ProfessionalRepository = require('Infra/repositories/ProfessionalRepository')

module.exports = async function CreateProfessional (data) {
  return ProfessionalRepository.create(data)
}
