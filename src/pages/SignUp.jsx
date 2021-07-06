import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container, Typography, TextField, Button,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { createUser } from '../store/userList/userList.actions';
import Message from '../components/Message';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      confirmedPassword: '',
      showMessage: false,
      infoMsg: '',
      severity: '',
    };
  }

  handleTextFieldChange = (type, event) => {
    this.setState({ [type]: event.target.value });
  }

  signUp = () => {
    const { username, password, confirmedPassword } = this.state;
    this.setState({
      showMessage: true,
      infoMsg: 'A new use has been created, please login!',
      severity: 'success',
    });
  }

  handleMessageClose = () => {
    this.setState({
      showMessage: false,
    });
  }

  render() {
    const {
      username, password, confirmedPassword, showMessage, infoMsg, severity,
    } = this.state;
    return (
      <div style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
        <Message
          showMessage={showMessage}
          infoMsg={infoMsg}
          severity={severity}
          vertical="top"
          horizontal="center"
          closeMessage={this.handleMessageClose}
        />
        <Container component="main" maxWidth="xs">
          <div>
            <Typography component="h1" variant="h5">
              Sign Up
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
              <TextField
                error={confirmedPassword !== password && password && confirmedPassword}
                helperText={(confirmedPassword !== password && password && confirmedPassword) ? 'Confirmed password and password should be the same.' : ''}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="confirmedPassword"
                label="Confirmed Password"
                type="password"
                id="comfirmedPassword"
                onChange={(event) => { this.handleTextFieldChange('confirmedPassword', event); }}
              />
              <>
                <div style={{ margin: '0px 0px 10px 0px', textAlign: 'right' }}>
                  <Link to="/" className="noDecoration">
                    <span className="normalItalic">Already a member? Sign in!</span>
                  </Link>
                </div>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={this.signUp}
                  disabled={!username || !password || !confirmedPassword || confirmedPassword !== password}
                >
                  Sign Up
                </Button>
              </>
            </form>
          </div>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loginUser: state.loginUser,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createUser(data) {
    dispatch(createUser(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
