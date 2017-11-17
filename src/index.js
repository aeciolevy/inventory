import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { compose, createStore, applyMiddleware } from 'redux';
import { reactReduxFirebase } from 'react-redux-firebase';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import firebase from 'firebase';

import App from './pages/App';
import Listing from './pages/Listing';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import LoginPage from './pages/login';
import PrivateRoute from './components/private-route';
import LoaderUI from './components/loader';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIRE_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DB_URL,
  projectId: process.env.REACT_APP_PROJECT ,
  storageBucket: "",
  messagingSenderId: process.env.REACT_APP_MESSAGE
};

firebase.initializeApp(firebaseConfig);

const config = {
  userProfile: 'users',
  enableLogging: false,
};

const createStoreWithMiddleware = compose(
  applyMiddleware(thunkMiddleware), reactReduxFirebase(firebase, config))(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/" component={App} />
        <PrivateRoute exact path="/listings" component={Listing} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/test" component={LoaderUI} />
      </Switch>
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
