'use strict'

class ResponsibleController {

  static get inject() {
    return ['App/Model/Responsible']
  }

  constructor(Responsible) {
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
