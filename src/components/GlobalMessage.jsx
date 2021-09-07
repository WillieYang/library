import React, { Component } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showMessage, clearMessage } from '../store/globalMessage/globalMessage.actions';

class globalMessage extends Component {
  static propTypes = {
    clearMessage: PropTypes.func.isRequired,
    messageContent: PropTypes.object.isRequired,
    messageOpen: PropTypes.bool.isRequired,
  }

  handleClose = () => {
    const { clearMessage } = this.props;
    clearMessage();
  }

  render() {
    const {
      messageContent, messageOpen,
    } = this.props;
    const { infoMsg, status } = messageContent;
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
        <Snackbar open={messageOpen} autoHideDuration={5000} onClose={this.handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
          <MuiAlert onClose={this.handleClose} severity={severity} elevation={6} variant="filled">
            {infoMsg}
          </MuiAlert>
        </Snackbar>
      </>
    );
  }
}

const mapStateToProps = state => ({
  messageContent: state.globalMessage.messageContent,
  messageOpen: state.globalMessage.messageOpen,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  showMessage(data) {
    dispatch(showMessage(data));
  },
  clearMessage() {
    dispatch(clearMessage());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(globalMessage);
