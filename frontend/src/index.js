import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AuthContextProvider from './components/context/authContext/AuthContext';
import AccountContextProvider from './components/context/accountContext/AccountContext';
import TransactionContextProvider from './components/context/transactionContext/TransactionContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <AccountContextProvider>
      <TransactionContextProvider>
        <App />
      </TransactionContextProvider>
    </AccountContextProvider>
  </AuthContextProvider>
);

