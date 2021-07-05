import React, { Component } from 'react';
import { connect } from 'react-redux';
import MaterialTable from 'material-table';
import {
  TextField, Dialog, DialogActions, Button,
  DialogContent, DialogContentText, DialogTitle,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { getBookList, createBook } from '../store/bookList/bookList.actions';

class BookList extends Component {
  static propTypes = {
    getBookList: PropTypes.func.isRequired,
    createBook: PropTypes.func.isRequired,
    bookList: PropTypes.array.isRequired,
  }

  constructor() {
    super();
    this.state = {
      showDialog: false,
      bookName: '',
      description: '',
      storage: '',
    };
  }

  componentDidMount() {
    const { getBookList } = this.props;
    getBookList();
  }

  showAddBook = () => {
    this.setState({ showDialog: true });
  }

  handleChange = type => (event) => {
    if (type === 'bookName') {
      this.setState({ bookName: event.target.value });
    } else if (type === 'description') {
      this.setState({ description: event.target.value });
    } else if (type === 'storage') {
      this.setState({ storage: event.target.value });
    }
    console.log(event.target.value);
  }

  handleClose = () => {
    this.setState({ showDialog: false });
  }

  handleAddBook = async () => {
    const { bookName, description, storage } = this.state;
    const { getBookList, createBook } = this.props;
    const data = { name: bookName, description, storage };
    console.log('data', data);
    await createBook(data);
    await getBookList();
    this.setState({ showDialog: false });
  }

  render() {
    const { showDialog } = this.state;
    const { bookList } = this.props;
    console.log('booklist', bookList);
    const columns = [
      { title: 'Book Name', field: 'name' },
      { title: 'Description', field: 'description' },
      { title: 'Storage', field: 'storage', type: 'numeric' },
    ];
    return (
      <>
        <div id="button" style={{ height: '56px' }}>
          <Button variant="contained" color="primary" style={{ float: 'right' }} onClick={this.showAddBook}>Add Book</Button>
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
              onChange={this.handleChange('bookName')}
              defaultValue=""
              style={{ paddingRight: '120px' }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="storage"
              label="Storage"
              onChange={this.handleChange('storage')}
              defaultValue=""
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="description"
              label="Description"
              onChange={this.handleChange('description')}
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
            <Button onClick={this.handleAddBook} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
        <MaterialTable
          title="Book Storage"
          columns={columns}
          data={bookList}
        />
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
  createBook(data) {
    dispatch(createBook(data));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(BookList);
