import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './components/forms/Login';
import HomePage from './components/homepage/HomePage';
import Register from './components/forms/Register'
import Navbar from './components/navbar/Navbar';
import AddTransaction from './components/forms/AddTransaction';
import AccountDashboard from './components/dashboard/AccountDashboard';
import AddAccount from './components/forms/AddAccount';
import AccountDetails from './components/dashboard/AccountDetails';
import { useContext } from 'react';
import { authContext } from './components/context/authContext/AuthContext';
import ViewHistory from './components/dashboard/ViewHistory';
import Account from './components/dashboard/Account';


function App() {
  const {token} = useContext(authContext)
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        {!token && <>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />} />
        </>}
        
        {token && <>
        <Route path='/add-transaction/:id' element={<AddTransaction />} />
        <Route path='/dashboard' element={<AccountDashboard />} />
        <Route path='/dashboard/accounts/create' element={<AddAccount />} />
        <Route path='/account-details/:accountId' element={ <AccountDetails/> } />
        <Route path='/account-details/view-history/:history/:id' element={<ViewHistory/>} />
        <Route path='/accounts' element={<Account/>} />
        </>}
      </Routes>
    </Router>
  );
}

export default App;
