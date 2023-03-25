import React, { useEffect, useMemo } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { ThemeProvider } from 'styled-components';

import { Home } from './home';
import { Navigation } from './navigation';
import { SideMenu } from './sideMenu';
import { Auth } from './authPage';
import { PurchaseList } from './purchaseList';
import { Weather } from './weather/view/weather';
import { SettingsPageView } from './settingsPage';

import { checkIsLoggedin } from './store/loginSlice/actions';

import './App.css';
import { checkTheme } from './store/themeSlice/actions';

function App() {
  const isLoggedin = useAppSelector((state) => state.loginData.userData);
  const theme = useAppSelector((state) => state.themeData);

  const dispatch = useAppDispatch();

  const routers = useMemo(() => {
    if (isLoggedin !== null) {
      return (
        <>
          <Navigation />
          <SideMenu />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/weather' element={<Weather />} />
            <Route path='/purchase-lists' element={<PurchaseList />} />
            <Route path='/settings' element={<SettingsPageView />} />
            <Route path='*' element={<Navigate to='/' replace />} />
          </Routes>
        </>
      );
    } else {
      return (
        <Routes>
          <Route path='/auth' element={<Auth />} />
          <Route path='*' element={<Navigate to='/auth' replace />} />
        </Routes>
      );
    }
  }, [isLoggedin]);

  useEffect(() => {
    checkIsLoggedin(dispatch);
  }, [dispatch]);
  useEffect(() => {
    checkTheme(dispatch);
  }, [dispatch]);

  return (
    <div className='App'>
      <ThemeProvider theme={theme.themes[theme.currentTheme]}>
        <BrowserRouter>{routers}</BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
