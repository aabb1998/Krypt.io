import { render } from 'react-dom';
import './index.css';
import App from './App';
import Account from './Routes/Account/Account';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './Routes/Account/SignUp';
import Login from './Routes/Account/Login';
import { UserAuthContextProvider } from './Context/UserAuthContext';

const rootElement = document.getElementById('root');
render(
  <UserAuthContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="account" element={<Account />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </UserAuthContextProvider>,

  rootElement
);
