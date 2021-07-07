import React, { Component } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import PropTypes from 'prop-types';

class Message extends Component {
  static propTypes = {
    closeMessage: PropTypes.func.isRequired,
    showMessage: PropTypes.bool.isRequired,
    infoMsg: PropTypes.string.isRequired,
    severity: PropTypes.string.isRequired,
    vertical: PropTypes.string.isRequired,
    horizontal: PropTypes.string.isRequired,
  }

  handleClose = () => {
    const { closeMessage } = this.props;
    closeMessage();
  }

  render() {
    const {
      infoMsg, severity, vertical, horizontal,
    } = this.props;
    return (
      <>
        <Snackbar open autoHideDuration={6000} onClose={this.handleClose} anchorOrigin={{ vertical, horizontal }}>
          <MuiAlert onClose={this.handleClose} severity={severity} elevation={6} variant="filled">
            {infoMsg}
          </MuiAlert>
        </Snackbar>
      </>
    );
  }
}

export default Message;
