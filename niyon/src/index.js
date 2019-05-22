import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
// import thunk from 'redux-thunk';
// import { createStore, applyMiddleware } from 'redux';
// import { setToken } from './components/forms/GetLoginForm';
// import { Provider } from 'react-redux';
// import reducer from './store/reducers';

// const store = createStore(
//       reducer,
//       applyMiddleware(setToken, thunk)
// );

ReactDOM.render(
      <Router>
            <App />
      </Router>, 
      document.getElementById('root')
);

