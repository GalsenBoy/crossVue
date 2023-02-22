import { createRouter,createWebHistory } from "vue-router";
import FirstView from '@/views/FirstView.vue';
import ProductComponent from '@/components/ProductComponent.vue';
import ApiComponent from "@/components/ApiComponent.vue";

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
    },
    {
        name:'api',
        path:'/api',
        component:ApiComponent,
    }

]

const router = createRouter({
    history:createWebHistory(),
    routes,
});
export default router