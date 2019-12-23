import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { initSearch } from './actions';
import reducers from './reducers';
import { setConfiguration } from 'react-grid-system';
import 'semantic-ui-css/semantic.min.css';
import App from './components/App';
import './index.css';

setConfiguration({ defaultScreenClass: 'md', gutterWidth: 20 });

const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);

store.dispatch(initSearch());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
