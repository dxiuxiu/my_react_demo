import {Suspense} from 'react' // lazy
import {BrowserRouter as Router,Switch} from 'react-router-dom' // Route
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
               {/* <Route exact path='/' component={lazy(()=>import('@/pages/HOCDemo'))}/> */}
            </Switch> 
        </Router>
        </Suspense>
    )
}
