import React, { Component, PropTypes } from 'react';
import ContentView from './ContentView';

class DeviceView extends Component {
  static propTypes = {
    params: PropTypes.object,
  };

  render() {
    const { params } = this.props;

    return (
      <div>
        <h3>device: {params.deviceID}</h3>
        <ContentView device={params.deviceID} />
      </div>
    );
  }
}

export default DeviceView;
