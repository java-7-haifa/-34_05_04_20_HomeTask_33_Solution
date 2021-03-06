import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './redux/rootReducer';

const store = createStore(rootReducer);


const app = (
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>
)


ReactDOM.render(app,
  document.getElementById('root')
);

