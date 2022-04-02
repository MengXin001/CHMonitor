import Vue from 'vue'
import Router from 'vue-router'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import CH from './view/CH';
import Numerical from './view/Numerical';
import loding from './view/loding';
Vue.use(ViewUI);
Vue.use(ElementUI);
Vue.use(Router)
const router = new Router({
    routes: [
        {
            path: '/CH',
            name: 'CH',
            component: CH,
            meta: {
                title: 'CH Met Monitor'
            }
        },
        {
            path: '/Numerical',
            name: 'Numerical',
            component: Numerical,
            meta: {
                title: 'Numerical Forecast'
            }
        },
        {
            path: '/',
            name: 'any',
            redirect: '/CH'
        },
        {
            path: '/loding',
            component: loding
        }
    ]
})
export default router