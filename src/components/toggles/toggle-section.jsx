import React from 'react';

const ToggleSection = ({children, section, selectedToggle, togglesChanged}) => {
  return(
      <ul>
        {children.map(child => {
          const {toggleName} = child.props;
          const handleClick = () => togglesChanged({[section]: toggleName });
          // this will augment child Toggle components with
          // includes a click handler that contains toggle section name the toggle valuie
          return React.cloneElement(child, {
            handleClick,
            key: toggleName,
            selected: (selectedToggle === child.props.toggleName)
          });
        })}
      </ul>
    );
}

export default ToggleSection;
