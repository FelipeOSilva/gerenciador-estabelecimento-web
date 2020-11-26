import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </BrowserRouter>
  )
}

export default Routes
