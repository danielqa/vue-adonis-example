<template>
  <form name="form" @submit.prevent="save()">

    <b-field label="Nome">
      <b-input v-model="responsible.nome" maxlength="150"></b-input>
    </b-field>

    <b-field label="Cpf">
      <b-input v-model="responsible.cpf"></b-input>
    </b-field>

    <b-field grouped>
      <div class="control">
        <button class="button is-primary" type="submit">Salvar</button>
      </div>

      <div class="control">
        <router-link :to="{name: 'responsible-list'}" class="button is-danger">
          Cancelar
        </router-link>
      </div>
    </b-field>

    <!--<fieldset v-if="isEdit">
      <legend>Processos que é responsável</legend>

      <div class="table-responsive">
        <table class="table table-striped table-condensed">
          <thead>
          <tr>
            <th width="14%">Número processo unificado</th>
            <th width="10%">Data distribuição</th>
            <th width="10%">Segredo de justiça</th>
            <th width="14%">Pasta física cliente</th>
            <th width="20%">Descrição</th>
            <th width="10%">Situação</th>
            <th width="20%">Responsáveis</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="processo in processos">
            <td>{{ processo.numero }}</td>
            <td>{{ processo.dataDistribuicao | date: 'dd/MM/yyyy' }}</td>
            <td>{{ processo.segredoJustica ? 'Sim' : 'Não' }}</td>
            <td>{{ processo.pastaFisicaCliente }}</td>
            <td>{{ processo.descricao }}</td>
            <td>{{ processo.situacao.descricao }}</td>
            <td>{{ processo.nomeResponsaveis }}</td>
          </tr>
          <tr v-if="!processos.length">
            <td colspan="7">
              <span>Nenhum processo vinculado!</span>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </fieldset>-->
  </form>
</template>

<script>
  export default {
    data() {
      return {
        isEdit: this.$route.params.id !== undefined,
        responsible: {
          nome: '',
          cpf: '',
        },
      };
    },
    created() {
      if (this.isEdit) {
        this.$http.get(`http://localhost:3333/responsibles/${this.$route.params.id}`)
          .then((response) => {
            this.responsible = response.data;
          })
          .catch((error) => {
            throw new Error(error);
          });
      }
    },
    methods: {
      save() {
        if (this.isEdit) {
          this.$http.put(`http://localhost:3333/responsibles/${this.$route.params.id}`, this.responsible)
            .then(() => {
            })
            .catch((error) => {
              throw new Error(error);
            });
        } else {
          this.$http.post('http://localhost:3333/responsibles', this.responsible)
            .then(() => {
            })
            .catch((error) => {
              throw new Error(error);
            });
        }
      },
    },
  };
</script>
