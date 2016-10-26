import React from 'react';
import Nav from './Nav';

export default class Frame extends React.Component {
  render() {
    return (
      <div className="frame">
        <div className="header">
          <Nav />
        </div>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
