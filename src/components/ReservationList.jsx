import React, { Component } from 'react'
import { connect } from 'react-redux';
import MaterialTable from 'material-table';
import {
  Dialog, DialogActions, Button,
  DialogContent, DialogContentText, DialogTitle
} from '@material-ui/core';
import { createReservation, getReservationList, clearReservation } from '../store/reservationList/reservationList.actions'

class ReservationList extends Component {
  constructor() {
    super();
    this.state = {
      showDialog: false,
      reservationId: '',
    }
  }

  componentDidMount() {
    const { getReservationList } = this.props;
    getReservationList();
  }

  clearReservation = (event, rowData) => {
    this.setState({ showDialog: true, reservationId: rowData._id });
  }

  handleClose = () => {
    this.setState({ showDialog: false });
  }

  handleClearReservation = async () => {
    const { reservationId } = this.state;
    const { clearReservation, getReservationList } = this.props;
    await clearReservation(reservationId);
    setTimeout(() => {
      getReservationList();
    }, 1000);
    await this.setState({ showDialog: false });
  }

  render() {
    const { showDialog } = this.state;
    const { reservationList } = this.props;
    const columns = [
      { title: 'User Name', field: 'username' },
      { title: 'Book Name', field: 'bookName' },
      { title: 'Start Date', field: 'startDate' },
      { title: 'End Date', field: 'endDate' },
    ];
    // const data = [
    //   { username: 'willie', bookName: 'IT Chapter 2', startDate: '2017-05-24T10:30', endDate: '2017-07-24T10:30' },
    //   { username: 'bill', bookName: 'Lord of Ring', startDate: '2017-05-28T10:30', endDate: '2017-08-29T10:30' },
    // ];
    const actions = [
      {
        icon: 'cancel',
        tooltip: 'Clear Reservation',
        onClick: this.clearReservation,
      }
    ];
    return (
      <>
        <MaterialTable
          title="Reserve Books You Like"
          columns={columns}
          data={reservationList}
          actions={actions}
          options={{
            actionsColumnIndex: -1
          }}
        />
        <Dialog open={showDialog} onClose={this.handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Clear Reservation</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure to clear this resevation?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
          </Button>
            <Button onClick={this.handleClearReservation} color="primary">
              Clear
          </Button>
          </DialogActions>
        </Dialog>
      </>
    )
  }
}

const mapStateToProps = state => ({
  reservationList: state.reservationList,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getReservationList(data) {
    dispatch(getReservationList(data));
  },
  createReservation(data) {
    dispatch(createReservation(data));
  },
  clearReservation(data) {
    dispatch(clearReservation(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ReservationList);
