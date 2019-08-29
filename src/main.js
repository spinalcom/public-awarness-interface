import Vue from 'vue';
import App from './App.vue';
import router from './plugins/router';
import vuetify from './plugins/vuetify';
import './plugins/cookie';
import UserManager from './UserManager';
Vue.config.productionTip = false;

Vue.prototype.$userManager = new UserManager();



new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app');
