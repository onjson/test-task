import { createStore } from 'redux';

import rootReducer from '../reducers';

export default function configureStore() {
  const store = createStore(
    rootReducer,
    // eslint-disable-next-line
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      // eslint-disable-next-line
      window.__REDUX_DEVTOOLS_EXTENSION__(),);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
}
