import React, { Component, PropTypes } from 'react';

class Content extends Component {
  static propTypes = {
    microdata: PropTypes.object,
    mydata: PropTypes.object,
  };

  render() {
    const { microdata, mydata } = this.props;

    return (
      <div>hello：{mydata.nick}</div>
    );
  }
}

export default Content;
