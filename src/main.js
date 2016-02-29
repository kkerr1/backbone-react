var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var ReactDOM = require('react-dom');
var React = require('react');
import Toggles from './components/toggles/toggles'; // bit of gotcha here, if using es6 modules appearently need to use es6 import

var Layout = Marionette.LayoutView.extend({

  template: `<div><div id="toggles"></div><div id="data"></div></div>`,

  regions: {
    'toggles': '#toggles',
    'data': '#data'
  },
  handleTogglesChanged: function(toggleState) {
    this.state.toggles = Object.assign({}, this.state.toggles, toggleState);

    //in real app you would then update the collection
    //call fetch on that collection, which when updated will update other collections

    //this is maybe a little wierd, COULD use a Redux store and and subscribe to it?
    this.renderReact();
  },

  initialize: function initialize(options) {
    this.state = {
      toggles: {
        'mobile_market_type': '2G',
        'bandwidth_metric_type': 'Mean'
      }
    };
    this.render();
  },
  // thoughts on where to call this?
  // layout views pretty much only render once, so I suppose this is OK?
  onRender: function onRender() {
    this.renderReact();
  },

  renderReact: function renderReact() {
     ReactDOM.render(<Toggles
       togglesChanged={this.handleTogglesChanged.bind(this)}
       toggleState={this.state.toggles}
      />, document.getElementById('toggles'));
  }

});

// this is a prototype, so just start it up
new Layout({el: '#app'});
