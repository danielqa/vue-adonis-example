import 'font-awesome/css/font-awesome.css';
import 'buefy/lib/buefy.css';
import Vue from 'vue';
import Axios from 'axios';
import Buefy from 'buefy';
import App from './App';
import router from './router';

Vue.config.productionTip = false;
Vue.prototype.$http = Axios;

Vue.use(Buefy, {
  defaultIconPack: 'fa',
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
