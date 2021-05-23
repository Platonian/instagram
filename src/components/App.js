import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// import Navigation from './Navigation'
import * as ROUTES from '../constants/routes'

const Login = lazy(() => import('../pages/login'))
const Signup = lazy(() => import('../pages/signup'))
const NotFound = lazy(() => import('../pages/not-found'))
const Dashboard = lazy(() => import('../pages/dashboard'))

const App = () => {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path={ROUTES.LOGIN} component={Login} exact/>
          <Route path={ROUTES.SIGNUP} component={Signup} exact />
          <Route path={ROUTES.DASHBOARD} component={Dashboard} exact/>
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
