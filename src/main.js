import Vue from 'vue';
import App from './App.vue';
import router from './plugins/router';
import vuetify from './plugins/vuetify';
import './plugins/cookie';
import UserManager from './UserManager';
import store from "./store"
Vue.config.productionTip = false;

Vue.prototype.$userManager = new UserManager();


new Vue({
  router,
  vuetify,
  store,
  render: h => h(App),
}).$mount('#app');
