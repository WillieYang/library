import React, { Component } from 'react';
import { MenuList, MenuItem } from '@material-ui/core';
import { Link, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Admin from './pages/Admin';
import User from './pages/User';
import Login from './pages/Login';

import './App.css';

class App extends Component {
  render() {
    return (
      <div style={{ height: '60vh' }}>
        <Header />
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
