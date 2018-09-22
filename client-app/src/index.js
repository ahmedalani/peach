import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route } from 'react-router-dom';
import history from './history';
import { Provider } from 'react-redux';
import store from './store';

const Root = ({ store } ) => (
  <Provider store={ store }>
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </Provider>
);


ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
registerServiceWorker();
