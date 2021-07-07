import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container, Typography, TextField, Button,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createUser, unsetSignUp } from '../store/userList/userList.actions';
import Message from '../components/Message';

class SignUp extends Component {
  static propTypes = {
    createUser: PropTypes.func.isRequired,
    unsetSignUp: PropTypes.func.isRequired,
    signUpRes: PropTypes.object.isRequired,
  }

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

  signUp = async () => {
    const { username, password } = this.state;
    const { createUser } = this.props;
    await createUser({ username, password });
  }

  handleMessageClose = () => {
    const { unsetSignUp } = this.props;
    unsetSignUp();
  }

  render() {
    const {
      username, password, confirmedPassword,
    } = this.state;
    const { signUpRes } = this.props;
    console.log(signUpRes);
    return (
      <div style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
        {
          Object.keys(signUpRes).length !== 0 ? (
            <Message
              infoMsg={signUpRes.infoMsg}
              severity={signUpRes.severity}
              vertical="top"
              horizontal="center"
              closeMessage={this.handleMessageClose}
            />
          ) : <></>
        }
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
                error={!!(confirmedPassword !== password && password && confirmedPassword)}
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
  signUpRes: state.signUpRes,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createUser(data) {
    dispatch(createUser(data));
  },
  unsetSignUp(data) {
    dispatch(unsetSignUp(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
