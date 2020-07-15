import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import Pane from './components/Pane'
import { loadState, saveState } from './utils'

import './App.css'

const persistedState = loadState()
const store = createStore(rootReducer, persistedState)
store.subscribe(() => {
  saveState(store.getState())
})

function App() {
  return (
    <Provider store={store}>
      <Pane />
    </Provider>
  );
}

export default App;
