import React, { Component } from 'react';
import {
  Container, Typography, TextField,
  FormControlLabel, Checkbox, Button,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

class Login extends Component {
  render() {
    return (
      <div style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
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
                // onChange={(event) => { this.handleTextFieldChange('username', event); }}
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
                // onChange={(event) => { this.handleTextFieldChange('password', event); }}
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
                    onClick={this.hanldeLoginClick}
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

export default Login;
