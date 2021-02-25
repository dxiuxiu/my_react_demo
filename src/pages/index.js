import {Suspense,lazy} from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import {createRoute} from '@/routes/createRoute'
import routesConfig from '@/routes'


// const App = lazy(()=>import('./App/App'))
export default function Page(){
    return(
        <Suspense fallback={<div>loading</div>}>
            <Router>
            <Switch>
                {
                    createRoute({routesConfig})
                }
               {/* <Route exact path='/' component={lazy(()=>import('@/pages/App/App'))}/> */}
            </Switch> 
        </Router>
        </Suspense>
    )
}
