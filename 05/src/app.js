import ReactDOM from 'react-dom';
import React from 'react';
import configureStore from './redux/configureStore';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import routes from './routes';
import DevTools from './redux/DevTools';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render((
  <Provider store={store}>
    <div>
      {routes(history)}
      <DevTools />
    </div>
  </Provider>
), document.getElementById('root'));
