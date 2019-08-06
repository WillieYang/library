import React, { Component } from 'react';
import MaterialTable from 'material-table'
import {
  TextField, Dialog, DialogActions, Button,
  DialogContent, DialogContentText, DialogTitle
} from '@material-ui/core';

class BookList extends Component {
  constructor() {
    super();
    this.state = { 
      showDialog: false,
      bookName: '',
      description: '',
      storage: '',
    };
  }

  showAddBook = () => {
    this.setState({ showDialog: true });
  }

  handleBookName = bookName => event => {
    this.setState({ bookName: event.target.value });
    console.log(event.target.value);
  }

  handleDescription = description => event => {
    this.setState({ description: event.target.value });
    console.log(event.target.value);
  }

  handleStorage = description => event => {
    this.setState({ storage: event.target.value });
    console.log(event.target.value);
  }

  handleClose = () => {
    this.setState({ showDialog: false });
  }


  render() {
    const {showDialog} = this.state;
    const columns = [
      { title: 'Book Name', field: 'bookName' },
      { title: 'Description', field: 'description' },
      { title: 'Storage', field: 'storage', type: 'numeric' },
    ];
    const data = [
      { bookName: 'IT Chapter 2', description: 'Story about five kids with a clown', storage: 15 },
      { bookName: 'Lord of Ring', description: 'Fantastic travel in the Middle World', storage: 13 },
    ];
    return (
      <>
        <div id="button" style={{ height: '56px' }}>
          <Button variant="contained" color="primary" style={{ margin: '10px', float: 'right' }} onClick={this.showAddBook}>Add Book</Button>
        </div>
        <Dialog open={showDialog} onClose={this.handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Add Book</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Please input the details about the corresponding book.
              </DialogContentText>
              <TextField
                id="bookName"
                label="Book Name"
                onChange={this.handleBookName('bookName')}
                defaultValue=""
                style={{ paddingRight: '120px' }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="storage"
                label="Storage"
                onChange={this.handleStorage('storage')}
                defaultValue=""
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="description"
                label="Description"
                onChange={this.handleDescription('description')}
                defaultValue=""
                margin="normal"
                multiline
                rows="3"
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
        <MaterialTable
          title="Book Storage"
          columns={columns}
          data={data}
        />
      </>
    )
  }
}

export default BookList;
