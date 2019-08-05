import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
	render() {
		return (
			<div>
				<AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit">
							<NavLink style={{ textDecoration: 'none', color: 'white' }} exact to="/">Dell Task & Library Management System</NavLink>
            </Typography>
          </Toolbar>
				</AppBar>
			</div>
		)
	}
}

export default NavBar;
