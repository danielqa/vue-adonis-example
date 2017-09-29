<template>
  <div>
    <fieldset>
      <legend>Filtros</legend>

      <div class="row">
        <div class="form-group col-md-4">
          <label>Responsável</label>
          <input type="text" class="form-control" v-model="filtro.nome" maxlength="150"/>
        </div>

        <div class="form-group col-md-3">
          <label>Cpf</label>
          <input type="text" class="form-control" v-model="filtro.cpf"/>
        </div>

        <div class="form-group col-md-3">
          <label>Número processo unificado</label>
          <input type="text" class="form-control" v-model="filtro.numeroProcesso" maxlength="20"/>
        </div>

        <div class="form-group">
          <label>&nbsp;</label>
          <div class="col-md-2">
            <button class="btn btn-primary col-md-12" type="button" @click="consultar()">Consultar</button>
          </div>
        </div>
      </div>
    </fieldset>

    <div class="table-responsive" v-if="responsibles !== undefined">
      <table class="table table-striped">
        <thead>
        <tr>
          <th width="20%">Nome</th>
          <th width="20%">Cpf</th>
          <th width="58%">Processos que é responsável</th>
          <th colspan="2">Ações</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="responsible in responsibles">
          <td>{{ responsible.nome }}</td>
          <td>{{ responsible.cpf }}</td>
          <!--<td>{{ responsible.numeroProcessos }}</td>-->
          <td>
            <a :href="`/responsible/${responsible.id}`" class="btn btn-primary btn-xs">
              <span class="glyphicon glyphicon-pencil"></span> Editar
            </a>
          </td>
          <td>
            <button class="btn btn-danger btn-xs" type="button" @click="deletar(responsible)">
              <span class="glyphicon glyphicon-trash"></span> Excluir
            </button>
          </td>
        </tr>
        <tr v-if="!responsibles.length">
          <td colspan="5">
            <span>Nenhum registro encontrado!</span>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        filtro: {
          nome: '',
          cpf: '',
          numeroProcesso: '',
        },
        responsibles: [],
      };
    },
    methods: {
      consultar() {
        this.$http.get('http://localhost:3333/responsibles')
          .then((response) => {
            this.responsibles = response.data;
          })
          .catch((error) => {
            throw new Error(error);
          });
      },
      deletar(responsible) {
        console.log(responsible);
      },
    },
  };
</script>
