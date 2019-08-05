import React, { Component } from 'react';
import { Tab, Tabs } from '@material-ui/core';

class Admin extends Component {
  constructor() {
    super()
    this.state = {
      tabIndex: 0
    };
  }

  handleChange = (event, newValue) => {
    this.setState({tabIndex: newValue});
  }

  render() {
    const { tabIndex } = this.state;
    return (
      <>
        <div>
          Admin
      </div>
        <div>
          <Tabs
            value={tabIndex}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
          <div value={tabIndex} index={0}>
            Item One
          </div>
          <div value={tabIndex} index={1}>
            Item Two
          </div>
          <div value={tabIndex} index={2}>
            Item Three
          </div>
        </div>
      </>
    )
  }
}

export default Admin;