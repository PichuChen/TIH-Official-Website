import { Router, Route, Link , browserHistory , IndexRoute , Redirect } from 'react-router'
import React from 'react';
import routing from './routing';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';


const store = configureStore();
const routes = routing(store);

export default (
  <Provider  store={store}>
    <Router history={ browserHistory } children={ routes }/>
  </Provider>
)
