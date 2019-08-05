import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Admin from './components/Admin';
import User from './components/User';
import Introduction from './components/Introduction';
import { MenuList, MenuItem } from '@material-ui/core';
import { Link, Route } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div style={{ display: 'flex' }}>
          <div style={{ width: '10%', flex: 1 }}>
            <MenuList>
              <MenuItem component={ Link } to="/admin">
                Admin
              </MenuItem>
              <MenuItem component={ Link } to="/user">
                User
              </MenuItem>
            </MenuList>
          </div>
          <div style={{ flex: 6, padding: '20px' }}>
            <Route path="/" exact component={ Introduction } />
            <Route path="/admin" exact component={ Admin } />
            <Route path="/user" exact component={ User } />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
