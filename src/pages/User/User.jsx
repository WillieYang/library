import React, { Component } from 'react';
import { connect } from 'react-redux';
import MaterialTable from 'material-table';
import {
  TextField, Dialog, DialogActions, Button,
  DialogContent, DialogContentText, DialogTitle,
} from '@material-ui/core';
import EventSeatIcon from '@material-ui/icons/EventSeat';
import PropTypes from 'prop-types';
import { getBookList } from '../../store/bookList/bookList.actions';
import { createReservation } from '../../store/reservationList/reservationList.actions';

class User extends Component {
  static propTypes = {
    getBookList: PropTypes.func.isRequired,
    createReservation: PropTypes.func.isRequired,
    bookList: PropTypes.array.isRequired,
  }

  constructor() {
    super();
    this.state = {
      showDialog: false,
      startDate: '2017-05-24T10:30',
      endDate: '2017-07-24T10:30',
      username: '',
      bookId: '',
      bookName: '',
      description: '',
    };
  }

  componentDidMount() {
    const { getBookList } = this.props;
    getBookList();
  }

  reserveBooks = (event, rowData) => {
    console.log('reserveBooks');
    this.setState({
      showDialog: true,
      bookId: rowData._id,
      description: rowData.description,
      bookName: rowData.name,
    });
  }

  handleClose = () => {
    this.setState({ showDialog: false });
  }

  handleChange = type => (event) => {
    if (type === 'startDate') {
      this.setState({ startDate: event.target.value });
    } else if (type === 'endDate') {
      this.setState({ endDate: event.target.value });
    } else if (type === 'username') {
      this.setState({ username: event.target.value });
    }
    console.log(event.target.value);
  }

  handleReservation = async () => {
    const {
      startDate, endDate, username, bookId, bookName, description,
    } = this.state;
    const data = {
      startDate, endDate, username, bookId, bookName, description,
    };
    const { createReservation } = this.props;
    await createReservation(data);
    await this.setState({ showDialog: false });
  }

  render() {
    const { showDialog } = this.state;
    const { bookList } = this.props;
    const columns = [
      { title: 'Book Name', field: 'name' },
      { title: 'Description', field: 'description' },
      { title: 'Count', field: 'storage', type: 'numeric' },
      { title: 'Count Left', field: 'countLeft', type: 'numeric' },
    ];
    bookList.forEach((element) => {
      element.countLeft = Math.floor(Math.random() * 5);
    });

    const actions = [
      {
        icon: () => <EventSeatIcon />,
        tooltip: 'Reserve Book',
        onClick: this.reserveBooks,
      },
    ];
    return (
      <>
        <div style={{ padding: '40px 10px' }}>
          <MaterialTable
            title="Reserve Books You Like"
            columns={columns}
            data={bookList}
            actions={actions}
            options={{
              actionsColumnIndex: -1,
            }}
          />
          <Dialog open={showDialog} onClose={this.handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Reservation</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Please input your username as well as choose the start and end date of reservation.
              </DialogContentText>
              <TextField
                id="startDate"
                label="Start Date"
                type="datetime-local"
                style={{ paddingRight: '20px', paddingBottom: '20px' }}
                onChange={this.handleChange('startDate')}
                defaultValue="2017-05-24T10:30"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="endDate"
                label="End Date"
                type="datetime-local"
                onChange={this.handleChange('endDate')}
                defaultValue="2017-05-24T10:30"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="username"
                label="Username"
                onChange={this.handleChange('username')}
                defaultValue=""
                style={{ paddingRight: '120px' }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={this.handleReservation} color="primary">
                Submit
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  bookList: state.bookList,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getBookList(data) {
    dispatch(getBookList(data));
  },
  createReservation(data) {
    dispatch(createReservation(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
