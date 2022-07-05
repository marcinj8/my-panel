import React, { useEffect, useMemo } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { ThemeProvider } from 'styled-components';

import { Auth } from './authPage';

import { checkIsLoggedin, logoutUser } from './store/loginSlice/actions';

import './App.css';

function App() {
  const isLoggedin = useAppSelector((state) => state.userData.userData);
  const theme = useAppSelector((state) => state.themeData);
  const dispatch = useAppDispatch();

  const routers = useMemo(() => {
    if (isLoggedin !== null) {
      return (
        <>
          <nav>
            <button onClick={() => dispatch(logoutUser())}>logout</button>
          </nav>
          <Routes>
            <Route path='/' element={<h1>logged in</h1>}></Route>
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
  }, []);

  return (
    <div className='App'>
      <ThemeProvider theme={theme.themes[theme.currentTheme]}>
        <BrowserRouter>{routers}</BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
