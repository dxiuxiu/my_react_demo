import {lazy} from 'react'
const routesConfig=[
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
        title:'HOCDemo',
        path:'/hoc',
        component: lazy(() =>
          import(/* webpackChunkName: "hoc-demo" */ '@/pages/HOCDemo'), // app.chunk.js
		),
        exact:false
    }
]
export default routesConfig