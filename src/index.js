import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import App from './pages/App';
import Listing from './pages/Listing';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/listings" component={Listing} />
      </Switch>
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
