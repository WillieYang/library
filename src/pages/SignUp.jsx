import React, { Component } from 'react';
import {
  Container, Typography, TextField, Button,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      confirmedPassword: '',
    };
  }

  handleTextFieldChange = (type, event) => {
    this.setState({ [type]: event.target.value });
  }

  signUp = () => {
    const { username, password, confirmedPassword } = this.state;
  }

  render() {
    const { username, password, confirmedPassword } = this.state;
    return (
      <div style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
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

export default SignUp;
