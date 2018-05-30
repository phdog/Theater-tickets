import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from 'components/App.container';
import store from 'store';
import 'styles/bundle.css'

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(<Root />, document.getElementById('root'));
