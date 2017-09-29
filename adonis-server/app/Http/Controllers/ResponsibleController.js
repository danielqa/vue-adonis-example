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
    const responsible = yield this.Responsible.create({})
    console.log(responsible)
  }

  * show(request, response) {
  }

  * edit(request, response) {
  }

  * update(request, response) {
  }

  * destroy(request, response) {
  }

}

module.exports = ResponsibleController
