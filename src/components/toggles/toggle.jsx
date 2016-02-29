import React from 'react';

const Toggle = ({selected, handleClick, toggleName}) => {
return(
  <li>
    <button onClick={handleClick}>{selected ? '✓' : ''} {toggleName}</button>
  </li>);
}

export default Toggle;
