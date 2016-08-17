import { createStore, applyMiddleware , compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';


export default function configureStore( preloadedState ) {

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  const createLogger = require('redux-logger');
  const logger = createLogger({
    level: 'info',
    duration: true,
    diff: true,
    collapsed: false
  });
  middlewares.push(logger);
}


  const store = createStore(
    reducer,
    preloadedState,
    compose( 
      applyMiddleware(...middlewares), 
      window.devToolsExtension ? window.devToolsExtension() : f => f 
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store;

}


