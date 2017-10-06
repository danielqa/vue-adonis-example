import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home';
import ResponsibleList from '../views/responsibles/ResponsibleList';
import ResponsibleForm from '../views/responsibles/ResponsibleForm';

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home,
      meta: {
        title: 'Página Inicial',
      },
    },
    {
      name: 'responsible-list',
      path: '/responsible',
      component: ResponsibleList,
      meta: {
        title: 'Consultar Responsável',
      },
    },
    {
      name: 'responsible-new',
      path: '/responsible/new',
      component: ResponsibleForm,
      meta: {
        title: 'Cadastrar Responsável',
      },
    },
    {
      name: 'responsible-edit',
      path: '/responsible/:id',
      component: ResponsibleForm,
      meta: {
        title: 'Editar Responsável',
      },
    },
    {
      path: '*',
      redirect: {
        name: 'home',
      },
    },
  ],
});
