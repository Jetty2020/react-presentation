import { Global, ThemeProvider } from '@emotion/react';
import React, { useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './constants';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import { GlobalStyles } from './styles/globals';
import { mode } from './styles/theme';

function App() {
  const [theme, setTheme] = useState(mode.light);
  const [dark, setDark] = useState(false);
  const handleMode = () => {
    if (dark) {
      setTheme(mode.light);
    } else {
      setTheme(mode.dark);
    }
    setDark((curr) => !curr);
  };
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyles(theme)} />
        <BrowserRouter>
          <Routes>
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.login} element={<Login />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <button type="button" onClick={handleMode}>
          다크모드 버튼
        </button>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
