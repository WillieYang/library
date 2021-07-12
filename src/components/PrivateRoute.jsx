import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import cookies from '../utils/cookies';

class PrivateRoute extends Component {
  static propTypes = {
    component: PropTypes.elementType.isRequired,
  }

  render() {
    const token = cookies.get('token');
    const { component: Component, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props => (
          token
            ? <Component {...props} />
            : <Redirect to="/" />
        )}
      />
    );
  }
}

export default PrivateRoute;
