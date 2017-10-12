'use strict'

class ResponsibleController {

  static get inject() {
    return ['Adonis/Addons/Validator', 'App/Model/Responsible']
  }

  constructor(Validator, Responsible) {
    this.Validator = Validator
    this.Responsible = Responsible
  }

  * index(request, response) {
    const responsibles = yield this.Responsible.all()
    response.json(responsibles)
  }

  * create(request, response) {
  }

  * store(request, response) {
    const responsible = new this.Responsible(request._body)
    const validation = yield this.Validator.validateAll(responsible, this.Responsible.rules, {
      'nome.required': 'Campo Nome é obrigatório!',
      'cpf.required': 'Campo Cpf é obrigatório!',
      'cpf.unique': 'Cpf já cadastrado!',
    })
    if (validation.fails()) {
      response.preconditionFailed(validation.messages().map(obj => obj.message))
      return
    }
    yield responsible.save()
    response.created()
  }

  * show(request, response) {
    const responsible = yield this.Responsible.find(request.param('id'))
    response.json(responsible)
  }

  * edit(request, response) {
  }

  * update(request, response) {
    const responsible = yield this.Responsible.find(request.param('id'))
    responsible.fill(request._body)
    yield responsible.save()
    response.noContent()
  }

  * destroy(request, response) {
    const responsible = yield this.Responsible.find(request.param('id'))
    yield responsible.delete()
    response.noContent()
  }

}

module.exports = ResponsibleController
