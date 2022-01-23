import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from './redux/store';
import CustomThemeProvider from './components/Theme/CustomThemeProvider';
import { routes } from './constants';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Provider store={store}>
      <HelmetProvider>
        <CustomThemeProvider>
          <BrowserRouter>
            <Routes>
              <Route path={routes.home} element={<Home />} />
              <Route path={routes.login} element={<Login />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </CustomThemeProvider>
      </HelmetProvider>
    </Provider>
  );
}

export default App;
