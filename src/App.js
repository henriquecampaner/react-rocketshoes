import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
// prodiver deixa o store disponivel
import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig';

import GlobalStyles from './styles/global';
import Header from './Components/Header';
import Routes from './routes';

import history from './services/history';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      {/* agora toda minha app tem acesso ao store */}
      <Router history={history}>
        <GlobalStyles />
        <Header />
        <Routes />
        <ToastContainer autoClose={3000} />
      </Router>
    </Provider>
  );
}

export default App;
