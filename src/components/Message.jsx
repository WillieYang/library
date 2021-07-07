import React, { Component } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import PropTypes from 'prop-types';

class Message extends Component {
  static propTypes = {
    closeMessage: PropTypes.func.isRequired,
    infoMsg: PropTypes.string.isRequired,
    status: PropTypes.number.isRequired,
    vertical: PropTypes.string.isRequired,
    horizontal: PropTypes.string.isRequired,
  }

  handleClose = () => {
    const { closeMessage } = this.props;
    closeMessage();
  }

  render() {
    const {
      infoMsg, status, vertical, horizontal,
    } = this.props;
    let severity = '';
    if (status.toString()[0] === '2') {
      severity = 'success';
    } else if (status.toString()[0] === '4') {
      severity = 'error';
    } else if (status.toString()[0] === '5') {
      severity = 'warning';
    }
    return (
      <>
        <Snackbar open autoHideDuration={5000} onClose={this.handleClose} anchorOrigin={{ vertical, horizontal }}>
          <MuiAlert onClose={this.handleClose} severity={severity} elevation={6} variant="filled">
            {infoMsg}
          </MuiAlert>
        </Snackbar>
      </>
    );
  }
}

export default Message;
