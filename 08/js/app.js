import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LineChart from './LineChart';
import BarChart from './BarChart';
import { generateData } from './Helper';
import '../css/style.scss';

class App extends Component {
  state = {
    data: generateData(Math.floor(8 + 8 * Math.random())),
  };

  handleClick = () => {
    this.setState({
      data: generateData(Math.floor(8 + 8 * Math.random())),
    });
  };

  render() {
    const { data } = this.state;

    return (
      <div>
        <a className="action" onClick={this.handleClick}>Click to Update data</a>
        <div>
          <BarChart data={data} width={400} height={300}/>
        </div>

        <div>
          <LineChart data={data} width={400} height={300}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
