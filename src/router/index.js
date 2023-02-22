import { createRouter,createWebHistory } from "vue-router";
import FirstView from '@/view/FirstView.vue';
import ProductComponent from '@/components/ProductComponent.vue';

const routes = [
    {
        name:'First',
        path:'/',
        component:FirstView,
    },
    {
        name:'product',
        path:'/product',
        component:ProductComponent,
    }

]

const router = createRouter({
    history:createWebHistory(),
    routes,
});
export default router