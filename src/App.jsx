import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import './App.css';
// Pages
import Admin from './pages/Admin/Admin';
import User from './pages/User/User';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

class App extends Component {
  render() {
    return (
      <div style={{ height: '60vh' }}>
        <Header />
        <div style={{ height: '100%' }}>
          <Switch>
            <Route path="/" exact component={Login} />
            <PrivateRoute path="/admin" exact component={Admin} />
            <PrivateRoute path="/user" exact component={User} />
            <Route path="/signUp" exact component={SignUp} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
