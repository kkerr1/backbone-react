# Backbone to React Notes

## React Components in Backbone Views
### React should know NOTHING about Backbone
- No Model listeners / no Backbone API calls. 
- Pass state into React Components as props that could be used in any system
- Use handler functions to handle state changes
- Don't write any Backbone / DOM tomfoolery inside a React component
- Backbone can know about React
- Wrap ReactDOM.render() call in a function. It will be your responsibility to make sure this get's called whenever it should.

```
export default ItemView.extend({
...

  renderReactToggle() {
    const toggleRegion = this.el.querySelector('#compare-toggles-region');
    ReactDOM.render(
      <CompareToggles
        providerType = {this.state.providerType}
        updateToggle = {this.updateToggle.bind(this)}
      />, toggleRegion);
  },
  
  updateToggle(providerType) {
    this.state.providerType = providerType;
    this.renderReactToggle();
  }
}
```
## Wrapping the Redux Provider in a Backbone View
We have the luxury of focusing on the Backbone-React, conversion page by page. We can keep the existing Backbone router around while focusing on page rewrites. To do this we created the following wrapper.

```
export default ItemView.extend({
  template,
  initialize(options) {
    this.elementSelector = '#react-container';
    this.store = options.store;
    this.container = options.container;
    this.options = options.options;
  },
  onRender() {
    const Container = this.container;
    const reactElement = this.el.querySelector(this.elementSelector);
    ReactDOM.render(
      <Provider store={this.store}>
        <Container options={this.options} />
      </Provider>
    , reactElement);
  },
  onDestroy() {
    ReactDOM.unmountComponentAtNode(this.el.querySelector(this.elementSelector));
  }
});
```
### Which can be called like-so:
```
this.trigger('show:view', new ReactWrapper({
  container: ProviderReport,
    options: {
      providerType, providerId, locationType, locationId, options
    },
    store: this.reduxStore,
}));
```

## Getting Creative With Middleware
Since we wanted to keep using the Backbone router, we used two levels of abstraction Redux gives us.
- Action creator
```
export const navigate = (link) => ({
  BACKBONE_NAVIGATE: link
});
```
- Middleware that intercepts these special calls



```
const backboneRouterMiddleware = (router) => () => (next) => (action) => {
  if (action && action.hasOwnProperty('BACKBONE_NAVIGATE')) {
    return router.navigate(action.BACKBONE_NAVIGATE, {trigger: true});
  }
  return next(action);
};
```

So that calling `navigate('/my/fun/url')` is all we have to do. 



