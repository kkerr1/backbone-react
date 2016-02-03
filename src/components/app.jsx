// React must be imported in each component, even if it's not explicitly used.
import React from 'react';

import Navigation from './navigation';
import Home from './home';

// The `{props.children}` below is where react-router renders the Route components nested under `/`.
const Layout = props => {
  return (
    <div>
      <Navigation/>
      <h1>React app with routing!</h1>
      {props.children ? props.children : <Home />}
    </div>
  );
};

export default Layout;
