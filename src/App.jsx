import React, { Component } from 'react';
import { MenuList, MenuItem } from '@material-ui/core';
import { Link, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Admin from './components/Admin';
import User from './components/User';
import Login from './components/Login';

import './App.css';

class App extends Component {
  render() {
    return (
      <div style={{ height: '60vh' }}>
        <NavBar />
        <div style={{ display: 'flex', height: '100%', alignItems: 'center' }}>
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
          <div style={{ flex: 6, padding: '20px' }}>
            <Switch>
              <Route path="/" exact component={Login} />
              <Route path="/admin" exact component={Admin} />
              <Route path="/user" exact component={User} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
