import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min'

import VueRouter from 'vue-router'

Vue.use(VueRouter);

import PersonIndex from './components/persons/Index'
import PersonCreate from './components/persons/Create'
import PersonEdit from './components/persons/Edit'

Vue.prototype.$base_url = 'http://localhost:8082/';

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'persons',
            component: PersonIndex
        },
        {
            path: '/create',
            name: '/create',
            component: PersonCreate
        },
        {
            path: '/edit/:id',
            name: 'edit',
            component: PersonEdit
        }
    ],
    mode: 'history'
});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
