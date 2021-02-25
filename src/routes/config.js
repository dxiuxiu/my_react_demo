import {lazy} from 'react'
const routeConfig=[
    {
        title:'APP',
        path:'/',
        // component:'@/pages/App/App',
        component: lazy(() =>
          import(/* webpackChunkName: "app" */ '@/pages/App/App'), // app.chunk.js
		),
        exact:true
    },
    {
        title:'hooks',
        path:'/hooks',
        component: lazy(() =>
          import(/* webpackChunkName: "hooks" */ '@/pages/hooks'), 
		),
        exact:false
    },
    {
        title:'normal',
        path:'/normal',
        component: lazy(() =>
          import(/* webpackChunkName: "hooks" */ '@/pages/normal'), 
		),
        exact:false
    }
]
export default routeConfig