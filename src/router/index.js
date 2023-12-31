import {createRouter, createWebHistory} from 'vue-router';
import HomePage from '../views/HomePage.vue';
import Twitter from '../views/Twitter.vue';
import Meta from '../views/Meta.vue';
import Books from '../views/Books.vue';
import Products from '../views/Products.vue';
const router=createRouter({
    history: createWebHistory(),
    routes:[{
        path: '/',
        
        component:HomePage, 
    },
    {
        path:'/twitter',
        component:Twitter
    },
     {
        path:'/meta',
        component:Meta
    },
    {
        path:'/books',
        component:Books
    },
     {
        path:'/products',
        component:Products
     }
  
  
]

});

export default router;