import React, { Component } from 'react';
import {
  Container, Typography, TextField,
  FormControlLabel, Checkbox, Button,
} from '@material-ui/core';

class Login extends Component {
  render() {
    return (
      <div>
        <Container component="main" maxWidth="xs">
          <div>
            <Typography component="h1" variant="h5">
              Sign in
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
                  <span>Not a Member</span>
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
