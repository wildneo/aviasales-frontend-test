import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { setConfiguration } from 'react-grid-system';
import reducers from './reducers';
import { initSearch } from './actions';
import App from './components/App';
import 'semantic-ui-css/semantic.min.css';
import './index.css';

setConfiguration({ defaultScreenClass: 'md', gutterWidth: 20 });

/* eslint-disable no-underscore-dangle */
const ext = window.__REDUX_DEVTOOLS_EXTENSION__;
const devtoolMiddleware = ext && ext();
/* eslint-enable */

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    devtoolMiddleware,
  ),
);

store.dispatch(initSearch());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
