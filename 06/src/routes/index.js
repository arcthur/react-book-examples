import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Frame from '../layouts/Frame';
import Home from '../views/Home';

const routes = browserHistory => (
  <Router history={browserHistory}>
    <Route path="/" component={Frame}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
);

export default routes;
