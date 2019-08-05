import React, { Component } from 'react';
import MaterialTable from 'material-table';
import {
  TextField, Dialog, DialogActions, Button,
  DialogContent, DialogContentText, DialogTitle
} from '@material-ui/core';

class User extends Component {
  constructor() {
    super();
    this.state = {
      showDialog: false,
      startDate: '2017-05-24T10:30',
      endDate: '2017-07-24T10:30',
    }
  }
  reserveBooks = (event, rowData) => {
    console.log('reserveBooks')
    this.setState({ showDialog: true });
  }

  handleClose = () => {
    this.setState({ showDialog: false });
  }

  handleStartDate = startDate => event => {
    this.setState({ startDate: event.target.value });
    console.log(event.target.value);
  }

  handleEndDate = endDate => event => {
    this.setState({ endDate: event.target.value });
    console.log(event.target.value);
  }

  render() {
    const { showDialog } = this.state;
    const columns = [
      { title: 'Book Name', field: 'bookName' },
      { title: 'Description', field: 'description' },
      { title: 'Count', field: 'count', type: 'numeric' },
      { title: 'Count Left', field: 'countLeft', type: 'numeric' },
    ];
    const data = [
      { bookName: 'IT Chapter 2', description: 'Story about five kids with a clown', count: 10, countLeft: 5 },
      { bookName: 'Lord of Ring', description: 'Fantastic travel in the Middle World', count: 9, countLeft: 4 },
    ];
    const actions = [
      {
        icon: 'library_books',
        tooltip: 'Reserve Book',
        onClick: this.reserveBooks,
      }
    ];
    return (
      <>
        <div>
          User
      </div>
        <div style={{ padding: '40px 10px' }}>
          <MaterialTable
            title="Reserve Books You Like"
            columns={columns}
            data={data}
            actions={actions}
            options={{
              actionsColumnIndex: -1
            }}
          />
          <Dialog open={showDialog} onClose={this.handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Reservation</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Please choose the start date and the end data of book you want to reserve.
              </DialogContentText>
              <TextField
                id="startDate"
                label="Start Date"
                type="datetime-local"
                style={{ paddingRight: '20px' }}
                onChange={this.handleStartDate('startDate')}
                defaultValue="2017-05-24T10:30"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="endDate"
                label="End Date"
                type="datetime-local"
                onChange={this.handleEndDate('endDate')}
                defaultValue="2017-05-24T10:30"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
          </Button>
              <Button onClick={this.handleClose} color="primary">
                Submit
          </Button>
            </DialogActions>
          </Dialog>
        </div>
      </>
    )
  }
}

export default User;