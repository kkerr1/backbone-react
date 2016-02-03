import React from 'react';
import { Link } from 'react-router';

const listStyle = {
  listStyleType: 'none',
  margin: 0
};

const listItemStyle = {
  marginRight: '1em'
};

const Navigation = props => {
  return (
    <nav>
      <ul style={listStyle}>
        <li style={listItemStyle}>
          <Link to='/'>Home</Link>
        </li>

        <li style={listItemStyle}>
          <Link to='/page1'>React Page 1</Link>
        </li>

        <li style={listItemStyle}>
          <Link to='/page2'>React Page 2</Link>
        </li>

      </ul>
    </nav>
  );
};

export default Navigation;
