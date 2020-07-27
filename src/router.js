import Vue from 'vue'
import VueRouter from 'vue-router'
import List from './List/List.vue'

Vue.use(VueRouter);
export const router = new VueRouter ({mode: 'history', routes:[
    {
        path : '/',
        component: List,

    }
    ]
        
    }
)