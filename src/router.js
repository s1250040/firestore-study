//設定してない
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home.vue'
import Display from './views/display.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Home },
    { path: '/display', component: Display }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;