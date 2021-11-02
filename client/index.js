import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';

ReactDOM.render(
  <Provider store={store}>
    {/* rest of app goes here */}
  </Provider>
  document.querySelector('#app')
);
