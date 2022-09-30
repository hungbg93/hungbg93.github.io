import React from "react";
import {Route, Routes, Navigate } from "react-router-dom";

import LandingPage from './LandingPage';
import NhanSu from './NhanSu';
import NotFoundPage from './NotFoundPage';

const _ = () => {  
  
  const user = JSON.parse(window.sessionStorage.getItem('user'));
  let isLogin = false;
  if(user && user.token) {
    isLogin = true;
  }

  return (
    isLogin ?
      <Routes>
        <Route path="/" element={<LandingPage />} />        
        <Route index path="/nhan-su" element={<NhanSu />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>  
    :
    <Navigate to='/login' />
  );
};

export default _;