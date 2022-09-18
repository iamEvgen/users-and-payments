import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Users from './pages/Users';
import Payments from './pages/Payments';
import { UserProvider } from './UsersContext';

function App() {
  return (
    <UserProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Menu />
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/payments" element={<Payments />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
