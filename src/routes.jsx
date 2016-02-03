import React from 'react'
import { Router, Route, Link, useRouterHistory } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory';

const history = useRouterHistory(createBrowserHistory)();

import App from './components/app';
import Page1 from './components/page1';
import Page2 from './components/page2';

const Routes = props => {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="page1" component={Page1} />
        <Route path="page2" component={Page2} />
      </Route>
    </Router>
  );
};

export default Routes;
