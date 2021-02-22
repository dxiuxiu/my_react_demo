import {Route} from 'react-router-dom'
// ./src/routes/createRoute.js Critical dependency: the request of a dependency is an expression
// import {lazy} from 'react'

export function createRoute({routesConfig}){
    return routesConfig.map(({title,path,component,exact=false},index)=>{
        return (
            <Route key ={index} exact={exact} path={path} component={component}/>
            // <Route exact path='/' component={lazy(()=>import('@/pages/App/App'))}/>
            // <Route exact path='/' component={lazy(()=>import(component))}/>
        )
    })
}