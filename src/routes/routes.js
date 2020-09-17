import React, {lazy, Suspense} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const Home = lazy(() => import('../pages/home'))
const Error = lazy(() => import('../pages/error'))

const Routes = () => {
  const Fallback = () => <p>Carregando...</p>

  return (
    <Suspense fallback={<Fallback />}>
      <Router>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='*' component={Error} />
        </Switch>
      </Router>
    </Suspense>
  )
}

export default Routes
