import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home';
import ResponsibleList from '../views/responsibles/ResponsibleList';
import ResponsibleForm from '../views/responsibles/ResponsibleForm';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '*', component: Home,
    },
    {
      path: '/responsible', component: ResponsibleList,
    },
    {
      path: '/responsible/new', component: ResponsibleForm,
    },
    {
      path: '/responsible/:id', component: ResponsibleForm,
    },
  ],
});
