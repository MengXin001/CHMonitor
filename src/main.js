import Vue from 'vue'
import router from './router.js';
import App from './App';
import axios from 'axios';
import 'lib-flexible'
Vue.prototype.axios = axios;
Vue.config.productionTip = false
new Vue
    ({
        router,
        render: h => h(App),
        axios,
    }).$mount('#app')