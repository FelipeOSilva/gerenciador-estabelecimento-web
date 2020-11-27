import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import NewEstablishment from './pages/NewEstablishment'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import { isAuthenticated } from './services/auth'

const PrivateRoute: React.FC<{
  component: React.FC
  path: string
  exact?: boolean
}> = (props) => {
  return isAuthenticated() ? <Route {...props} /> : <Redirect to="/" />
}

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <PrivateRoute path="/home" component={Home} />
        <PrivateRoute
          path="/new-establishment"
          exact
          component={NewEstablishment}
        />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
