import React from 'react';
import Toggle from './toggle';
import ToggleSection from './toggle-section';

// Probably will want to add PureRender into here
// Also should define propTypes

const Toggles = ({toggleState, togglesChanged}) => {
  return (
    <div>
    <ToggleSection
    section="mobile_market_type"
    selectedToggle={toggleState.mobile_market_type}
     togglesChanged={togglesChanged}>
      <Toggle toggleName="Cellular" />
      <Toggle toggleName="2G" />
      <Toggle toggleName="3G" />
    </ToggleSection>
    
    <ToggleSection
    section="bandwidth_metric_type"
    selectedToggle={toggleState.bandwidth_metric_type}
     togglesChanged={togglesChanged}>
      <Toggle toggleName="Mean" />
      <Toggle toggleName="Median" />
      <Toggle toggleName="Top10Percent" />
    </ToggleSection>
    </div>
  );
};

export default Toggles;
