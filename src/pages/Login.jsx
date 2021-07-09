import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container, Typography, TextField,
  FormControlLabel, Checkbox, Button,
} from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loginUser, unsetLogin } from '../store/userList/userList.actions';
import Message from '../components/Message';
import cookies from '../utils/cookies';

class Login extends Component {
  static propTypes = {
    loginUser: PropTypes.func.isRequired,
    loginRes: PropTypes.object.isRequired,
    unsetLogin: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleTextFieldChange = (type, event) => {
    this.setState({ [type]: event.target.value });
  }

  handleMessageClose = () => {
    const { unsetLogin } = this.props;
    unsetLogin();
  }

  login = async () => {
    const { username, password } = this.state;
    const { loginUser } = this.props;
    await loginUser({ username, password });
  }

  render() {
    const { loginRes } = this.props;
    const token = cookies.get('token');
    if (token) {
      return <Redirect to="/admin" />;
    }
    return (
      <div style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
        {
          Object.keys(loginRes).length !== 0 ? (
            <Message
              infoMsg={loginRes.infoMsg}
              status={loginRes.status}
              vertical="top"
              horizontal="center"
              closeMessage={this.handleMessageClose}
            />
          ) : <></>
        }
        <Container component="main" maxWidth="xs">
          <div>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <form noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                onChange={(event) => { this.handleTextFieldChange('username', event); }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(event) => { this.handleTextFieldChange('password', event); }}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              {
                  // ifSigning ? (
                  //   <Button
                  //     fullWidth
                  //     variant="contained"
                  //     color="primary"
                  //     disabled
                  //   >
                  //     Signing In...
                  //   </Button>
                  // ) : (
                <>
                  <Link to="/signUp" className="noDecoration">
                    <span className="normalItalic">Not a Member, register!</span>
                  </Link>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={this.login}
                  >
                    Sign In
                  </Button>
                </>
                }
            </form>
          </div>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loginRes: state.loginRes,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loginUser(data) {
    dispatch(loginUser(data));
  },
  unsetLogin(data) {
    dispatch(unsetLogin(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
