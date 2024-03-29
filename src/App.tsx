import React, { useEffect, useMemo, useState } from 'react';
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
import { Recipes } from './recipes';

import { checkIsLoggedin } from './store/loginSlice/actions';

import './App.css';
import { checkTheme } from './store/themeSlice/actions';
import { getLocation } from './deviceInfo/data/locationData';
import { getFullCityWeather } from './store/weatherSlice/actions';
import { setCurrentDisplayed } from './store/weatherSlice/reducer';
import { CityDataModel, setUserLocation } from './store/userData/reducer';

function App() {
  const [currentPositon, setCurrentPositon] = useState<null | CityDataModel>(
    null
  );

  const isLoggedin = useAppSelector((state) => state.loginData.userData);
  const theme = useAppSelector((state) => state.themeData);
  const weather = useAppSelector((state) => state.weatherSlice);

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
            <Route path='/recipes' element={<Recipes />} />
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

  useEffect(() => {
    if (!currentPositon && isLoggedin !== null) {
      getLocation(setCurrentPositon);
    }
  }, [currentPositon, isLoggedin]);

  useEffect(() => {
    if (currentPositon && isLoggedin !== null) {
      dispatch(setUserLocation(currentPositon));
    }
  }, [currentPositon, dispatch, isLoggedin]);

  useEffect(() => {
    if (currentPositon && isLoggedin !== null) {
      dispatch(setCurrentDisplayed(currentPositon));
    }
  }, [currentPositon, dispatch, isLoggedin]);

  useEffect(() => {
    if (currentPositon && !weather.weatherData && isLoggedin !== null) {
      dispatch(getFullCityWeather(currentPositon));
    }
  }, [currentPositon, dispatch, weather.weatherData, isLoggedin]);

  return (
    <div className='App'>
      <ThemeProvider theme={theme.themes[theme.currentTheme]}>
        <BrowserRouter>{routers}</BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
