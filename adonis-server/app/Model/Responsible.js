'use strict'

const Lucid = use('Lucid')

class Responsible extends Lucid {
  static get rules() {
    return {
      nome: 'required',
      cpf: 'required|unique:responsibles',
    }
  }
}

module.exports = Responsible
