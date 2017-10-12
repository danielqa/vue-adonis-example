import 'font-awesome/css/font-awesome.css';
import 'buefy/lib/buefy.css';
import Vue from 'vue';
import Axios from 'axios';
import Buefy from 'buefy';
import App from './App';
import router from './router';
import HttpRequest from './services/http-request';
import FlashMessage from './services/flash-message';

Axios.interceptors.request.use((config) => {
  HttpRequest.pushRequest();
  return config;
}, (error) => {
  HttpRequest.popRequest();
  return Promise.reject(error);
});

Axios.interceptors.response.use((response) => {
  HttpRequest.popRequest();
  return response;
}, (error) => {
  HttpRequest.popRequest();
  if (error.response) {
    if (error.response.status === 412) {
      FlashMessage.show('danger', error.response.data);
    }
  } else {
    FlashMessage.show('danger', 'Servidor indisponível no momento!');
  }
  return Promise.reject(error);
});

Vue.prototype.$http = Axios;

Vue.config.productionTip = false;

Vue.use(Buefy, {
  defaultIconPack: 'fa',
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
