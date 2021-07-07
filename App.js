import React, { Component } from 'react';
import {Router,Route, Switch, Link} from 'react-router-dom';

import './App.css';
import Signup from './components/Signup';
import {Container} from 'react-bootstrap';
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './components/ForgotPassword';
import {AuthProvider } from "./context/AuthContext";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App(){
  return(
    <Container
    className="d-flex align-items-center justify-content-center"
    style={{minHeight: '100vh'}}>
      <div className="w-100" style={{maxWidth:"400px"}}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component ={Dashboard}/>
             {/* <Route path="/signup" component={Signup}/>*/}
              <Route path ="/login" component={Login}/>
               {/* <Route path ="/forgot-password" component={ForgotPassword}/>*/}
            </Switch>
          </AuthProvider>
        </Router>
    <Signup/>
    </div>
    </Container>
  )
}

export default App;
