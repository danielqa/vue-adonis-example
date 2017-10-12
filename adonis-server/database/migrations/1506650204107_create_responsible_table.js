'use strict'

const Schema = use('Schema')

class ResponsiblesTableSchema extends Schema {

  up() {
    this.create('responsibles', (table) => {
      table.increments()
      table.string('nome', 50)
      table.string('cpf', 14)
      table.timestamps()
    })
  }

  down() {
    this.drop('responsibles')
  }

}

module.exports = ResponsiblesTableSchema
