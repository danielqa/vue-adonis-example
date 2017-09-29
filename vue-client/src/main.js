import Vue from 'vue';
import Axios from 'axios';
import App from './App';
import router from './router';

Vue.config.productionTip = false;
Vue.prototype.$http = Axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
