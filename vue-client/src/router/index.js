import Vue from 'vue';
import VueRouter from 'vue-router';
import FlashMessage from '../services/flash-message';
import Home from '../views/Home';
import ResponsibleList from '../views/responsibles/ResponsibleList';
import ResponsibleForm from '../views/responsibles/ResponsibleForm';

Vue.use(VueRouter);

const router = new VueRouter({
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

router.afterEach(() => {
  FlashMessage.destroy();
});

export default router;
