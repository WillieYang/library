import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { NavLink, Link } from 'react-router-dom';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { unsetLogin } from '../store/userList/userList.actions';

class Header extends Component {
  static propTypes = {
    unsetLogin: PropTypes.func.isRequired,
    loginRes: PropTypes.func.isRequired,
  }

  logOut = () => {
    const { unsetLogin } = this.props;
    unsetLogin();
  }

  render() {
    const { loginRes } = this.props;
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
                  loginRes.token ? (
                    <Link to="/" onClick={this.logOut}>
                      <ExitToAppIcon style={{ color: 'white' }} />
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
