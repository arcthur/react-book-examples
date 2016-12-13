import React, { Component, PropTypes, cloneElement } from 'react';
import { Link, IndexLink } from 'react-router';

const ACTIVE = { color: 'red' };

class LayoutView extends Component {
  static propTypes = {
    microdata: PropTypes.object,
    mydata: PropTypes.object,
  };

  renderChildren() {
    const { microdata, mydata, children } = this.props;
    let items = [];

    React.Children.map(children, (child, i) => {
      items.push(cloneElement(child, {
        key: i,
        microdata: microdata,
        mydata: mydata
      }));
    });

    return items;
  }

  render() {
    return (
      <div>
        <h1>APP device!</h1>
        <ul>
          <li><Link to="/device/all" activeStyle={ACTIVE}>/device/all</Link></li>
          <li><Link to="/device/pc" activeStyle={ACTIVE}>/device/pc</Link></li>
          <li><Link to="/device/wireless" activeStyle={ACTIVE}>/device/wireless</Link></li>
        </ul>
        {this.renderChildren()}
      </div>
    );
  }
}

export default LayoutView;
