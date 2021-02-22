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
    }
]
export default routeConfig