import React, { Component, PropTypes } from 'react';

class ContentView extends Component {
  static propTypes = {
    device: PropTypes.string,
  };

  state = {
    text: `please fetch device of ${this.props.device} data from server!`
  };

  getText(device) {
    return `this data is fetch from device of ${device}`;
  }

  componentWillMount() {
    const { device } = this.props;

    this.setState({
      text: this.getText(device),
    });
  }

  componentWillReceiveProps(nextProps) {
    const { device } = nextProps;

    this.setState({
      text: this.getText(device),
    });
  }

  render() {
    const { text } = this.state;

    return (
      <div>
        <span>{text}</span>
      </div>
    );
  }
}

export default ContentView;
