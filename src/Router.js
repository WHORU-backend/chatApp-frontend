import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/LoginPage';
import A from './Pages/A';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="/login" element={<A />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
