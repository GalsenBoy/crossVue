import { createRouter,createWebHistory } from "vue-router";
import FirstView from '@/views/FirstView.vue';
import ProductComponent from '@/components/ProductComponent.vue';
import NotFoundVue from "@/views/NotFound.vue";
import ApiComponent from "@/components/ApiComponent.vue";

const routes = [
    {
        name:'First',
        path:'/',
        component:FirstView,
        meta:{
            title:'Cross Vue'
        }
    },
    {
        name:'product',
        path:'/produit',
        component:ProductComponent,
        meta:{
            title:'Produit'
        }

    },
    {
        name:'api',
        path:'/api',
        component:ApiComponent,
        meta:{
            title:'Api gouv'
        }
    },
    {
        name:'error',
        path:'/:pathMatch(.*)',
        component:NotFoundVue,
        meta:{
            title:"La page n'existe pas"
        }
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes,
});

router.afterEach((to)=>{
    document.title = to.meta.title;
})
export default router