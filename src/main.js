import Vue from 'vue'
import Antd from 'ant-design-vue';
import VueSweetalert2 from 'vue-sweetalert2';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue'
import MyRecordingLayout from './layouts/myrecordings.vue'
import router from './router'
// import './plugins/click-away'

import './scss/app.scss';

Vue.use(VueSweetalert2);

Vue.use(Antd);

Vue.config.productionTip = false

// Adding template layouts to the vue components.
Vue.component("layout-myrecordings", MyRecordingLayout);;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')