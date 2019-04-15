//設定してない
import Vue from 'vue';
import VueRouter from 'vue-router';
import Top from 'js/pages/Top.vue';
import About from 'js/pages/About.vue';
import Contact from 'js/pages/Contact.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;