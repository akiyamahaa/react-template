import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RouterConfig from 'navigation/RouterConfig';
import { Provider } from 'react-redux';
import store from 'redux/stores';
import { Link } from 'react-router-dom';
import { ABOUT_PATH, ROOT } from 'navigation/CONSTANT';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to={ROOT}>HOME</Link>
          <Link to={ABOUT_PATH}>ABOUT</Link>
          <Link to="teams">TEAM</Link>
        </li>
      </ul>
      <Provider store={store}>
        <BrowserRouter>
          <RouterConfig />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
