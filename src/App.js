import React from 'react';
import { Provider } from 'react-redux';
import store from './lib/redux';

import InboxScreen, { PureInboxScreen } from './components/InboxScreen';

import './index.css';

const App = () => {
  return (
    <Provider store={store}>
      <InboxScreen />
    </Provider>
  );
}

export default App;