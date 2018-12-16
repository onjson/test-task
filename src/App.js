import React from 'react';
import { Provider } from 'react-redux';

import Config from './components';
import configureStore from './store';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Config />
  </Provider>
);

export default App;
