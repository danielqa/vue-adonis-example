'use strict'

class ResponsavelController {

  static get inject () {
    return ['App/Model/Responsavel']
  }

  constructor (Responsavel) {
    this.Responsavel = Responsavel
  }

  * index (request, response) {
    const responsaveis = yield this.Responsavel.all()
    console.log(responsaveis)
    response.json(responsaveis)
  }

  * store (request, response) {
    console.log(12312312)
    const responsavel = yield this.Responsavel.create({})
    console.log(responsavel)
  }

  * show (request, response) {
  }

  * update (request, response) {
  }

  * destroy (request, response) {
  }
}

module.exports = new ResponsavelController()
