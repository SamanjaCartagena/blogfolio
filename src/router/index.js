import {createRouter, createWebHistory} from 'vue-router';
import HomePage from '../views/HomePage.vue';
import Twitter from '../views/Twitter.vue'
const router=createRouter({
    history: createWebHistory(),
    routes:[{
        path: '/',
        
        component:HomePage, 
    },
    {
        path:'/twitter',
        component:Twitter
    }
  
]

});

export default router;