import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';
import MenuBookIcon from '@material-ui/icons/MenuBook';

class Header extends Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              <NavLink style={{ textDecoration: 'none', color: 'white' }} exact to="/">
                <MenuBookIcon style={{
                  fontSize: '30px', position: 'relative', top: '5px', right: '10px',
                }}
                />
                <span>Library MS</span>
              </NavLink>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
