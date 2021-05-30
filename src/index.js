import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import App from './components/App';
import './index.css';
import movies from './reducers';

const store = createStore(movies);
console.log('store', store);
console.log('STATE', store.getState());

// console.log('BEFORE STATE', store.getState());

// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{ name: 'Superman '}]
// });

// console.log('AFTER STATE', store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>,
  document.getElementById('root')
);