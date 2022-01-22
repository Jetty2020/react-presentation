import { Global } from '@emotion/react';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './constants';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import { GlobalStyles } from './styles/globals';

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <BrowserRouter>
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.login} element={<Login />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
