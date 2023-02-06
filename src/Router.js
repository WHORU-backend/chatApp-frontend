import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Callback from './Pages/Callback';
import Login from './Pages/LoginPage';

import KakaoCallBack from './Components/KakaoCallBack';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="/users/naver/info" element={<Callback />} />
        <Route path="/users/kakao/info" element={<Callback />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
