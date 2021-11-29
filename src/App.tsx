import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterConfig from 'navigation/RouterConfig';
import { Provider } from 'react-redux';
import store from 'redux/stores';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <RouterConfig />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
