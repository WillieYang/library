import React, { Component, memo } from 'react';
import { Tab, Tabs } from '@material-ui/core';
import BookList from './BookList';
import ReservationList from './ReservationList'

class Admin extends Component {
  constructor() {
    super()
    this.state = {
      tabIndex: 'one'
    };
  }

  handleChange = (event, newValue) => {
    console.log(newValue)
    this.setState({tabIndex: newValue});
  }

  render() {
    const { tabIndex } = this.state;
    let TabPanel;
    if (tabIndex === "one") {
      TabPanel = memo(() => (
        <BookList />
      ));
    } else if (tabIndex === "two") {
      TabPanel = memo(() => (
        <ReservationList />
      ));
    } 
    return (
      <>
        <div>
          Admin
      </div>
        <div style={{ padding: '10px 20px' }}>
          <Tabs
            value={tabIndex}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="Book List" value="one" />
            <Tab label="Reservation List" value="two"/>
          </Tabs>
          <div id="tabPanel" style={{ margin: '20px 40px' }}>
            <TabPanel />
          </div>
        </div>
      </>
    )
  }
}

export default Admin;