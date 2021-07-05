import React, { Component } from 'react';
// import { MenuList, MenuItem } from '@material-ui/core';
// import { Link, Route, Switch } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

// Components
import Header from './components/Header';

// Pages
import Admin from './pages/Admin';
import User from './pages/User';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

import './App.css';

class App extends Component {
  render() {
    return (
      <div style={{ height: '60vh' }}>
        <Header />
        <div style={{ height: '100%' }}>
          {/* <div style={{ width: '10%', flex: 1 }}>
            <MenuList>
              <MenuItem component={Link} to="/admin">
                Admin
              </MenuItem>
              <MenuItem component={Link} to="/user">
                User
              </MenuItem>
            </MenuList>
          </div> */}
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/admin" exact component={Admin} />
            <Route path="/user" exact component={User} />
            <Route path="/signUp" exact component={SignUp} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
