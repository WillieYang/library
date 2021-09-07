import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  AppBar, Toolbar, Typography, Tooltip,
} from '@material-ui/core';
import { MenuBook as MenuBookIcon, ExitToApp as ExitToAppIcon } from '@material-ui/icons';
import { unsetLogin } from '../store/userList/userList.actions';
import cookies from '../utils/cookies';
import { clearAllCookies } from '../utils/helpers';

class Header extends Component {
  static propTypes = {
    unsetLogin: PropTypes.func.isRequired,
  }

  logOut = () => {
    const { unsetLogin } = this.props;
    unsetLogin();
    clearAllCookies();
  }

  render() {
    const token = cookies.get('token');
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{ display: 'flex', width: '100%' }}>
              <div style={{ flex: 7 }}>
                <MenuBookIcon style={{
                  fontSize: '30px', position: 'relative', top: '5px', right: '10px',
                }}
                />
                <span>Library MS</span>
              </div>
              <div style={{
                fontSize: '25px', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end',
              }}
              >
                {
                  token ? (
                    <Link to="/" onClick={this.logOut}>
                      <Tooltip placement="left" title={<span style={{ fontSize: '12px' }}>Log Out</span>}>
                        <ExitToAppIcon style={{ color: 'white' }} />
                      </Tooltip>
                    </Link>
                  ) : <></>
                }
              </div>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loginRes: state.loginRes,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  unsetLogin(data) {
    dispatch(unsetLogin(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
