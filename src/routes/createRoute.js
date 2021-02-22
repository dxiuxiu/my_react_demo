import {Route} from 'react-router-dom'
// ./src/routes/createRoute.js Critical dependency: the request of a dependency is an expression

export function createRoute({routesConfig}){
    return routesConfig.map(({title,path,component,exact=false},index)=>{
        return (
            <Route key ={index} exact={exact} path={path} component={component}/>
        )
    })
}