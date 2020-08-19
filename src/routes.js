import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import Home from './pages/Home'
import NaverForm from './pages/NaverForm'
import Login from './pages/Login'

import { isAuthenticated } from "./services/auth"

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
          <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
        )
    }
  />
)

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={() => <Login />} />
      <PrivateRoute path="/" exact component={() => <Home />} />
      <PrivateRoute path="/naver-form" exact component={() => <NaverForm />} />
      <PrivateRoute path="/naver-form/:id" component={() => <NaverForm />} />
    </Switch>
  </BrowserRouter>
)

function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/">
          <Route path="/" exact component={Home} />
          <Route path="/naver-form" component={NaverForm} />
        </PrivateRoute>
      </Switch>

    </BrowserRouter>
  )
}

export default Routes
