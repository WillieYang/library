import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { NavLink, Link } from 'react-router-dom';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


class Header extends Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{ display: 'flex', width: '100%' }}>
              <NavLink style={{ textDecoration: 'none', color: 'white', flex: 7 }} exact to="/">
                <MenuBookIcon style={{
                  fontSize: '30px', position: 'relative', top: '5px', right: '10px',
                }}
                />
                <span>Library MS</span>
              </NavLink>
              <div style={{
                fontSize: '25px', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end',
              }}
              >
                <Link to="/">
                  <ExitToAppIcon style={{ color: 'white' }} />
                </Link>
              </div>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
