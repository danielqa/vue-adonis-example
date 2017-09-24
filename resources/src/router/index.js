import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import ResponsavelList from '../views/responsaveis/ResponsavelList.vue'
import ResponsavelForm from '../views/responsaveis/ResponsavelForm.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({y: 0}),
  routes: [
    {path: '*', component: Home},
    {path: '/responsavel', component: ResponsavelList},
    {path: '/responsavel/novo', component: ResponsavelForm},
    {path: '/responsavel/:id', component: ResponsavelForm}
  ]
})
