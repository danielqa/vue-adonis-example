<template>
  <div>
    <b-field grouped>
      <b-field label="Responsável" expanded>
        <b-input v-model="filtro.nome" maxlength="150"></b-input>
      </b-field>

      <b-field label="Cpf" expanded>
        <b-input v-model="filtro.cpf"></b-input>
      </b-field>

      <b-field label="Número processo unificado" expanded>
        <b-field grouped>
          <b-input v-model="filtro.numeroProcesso" maxlength="20"></b-input>

          <div class="control">
            <button class="button is-primary" type="button" @click="consultar()">Consultar</button>
          </div>
        </b-field>
      </b-field>
    </b-field>

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
          <td></td>
          <td>
            <router-link :to="{name: 'responsible-edit', params: {id: responsible.id}}" class="button is-info">
              Editar
            </router-link>
          </td>
          <td>
            <button class="button is-danger" type="button" @click="deletar(responsible.id)">
              Excluir
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
        responsibles: undefined,
      };
    },
    methods: {
      consultar() {
        this.$http.get('http://localhost:3333/responsibles')
          .then((response) => {
            this.responsibles = response.data;
          });
      },
      deletar(id) {
        this.$http.delete(`http://localhost:3333/responsibles/${id}`)
          .then((response) => {
            this.responsibles = response.data;
          });
      },
    },
  };
</script>
