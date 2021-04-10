import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';

//Importar as páginas
import HomePage from './templates/HomePage';
// import Shop from './templates/Shop';
import LoginInterface from './components/LoginInterface';

const PrivateRoutes = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      (localStorage.getItem('access_token')) ?
      <HomePage /> :
      <Redirect to="/login"/>
    )}
  />
);

//Criar o componentes com as rotas
export default function Routes(){
    return(
      <Router>
        <Suspense fallback={<div className="d-flex justify-content-center mt-5 pt-5"><CircularProgress /></div>}>
          <Switch>
            <PrivateRoutes path="/cart" component={() => (<h1>Cart</h1>)} />
            <PrivateRoutes path="/cart/:id" component={() => (<h1>Cart</h1>)} />
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/login">
              <LoginInterface />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    );
};