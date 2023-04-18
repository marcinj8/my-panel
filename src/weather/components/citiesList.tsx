import React, { useMemo } from 'react';

import { Button } from '../../shared/components';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  StyledCityList,
  StyledCityListItem,
  StyledCityName,
} from '../style/cityList.style';
import { CityDataModel } from '../../store/userData/reducer';
import { setCurrentDisplayed } from '../../store/weatherSlice/reducer';
import { deleteCityWeather } from '../../store/userData/actions';

interface ItemsListModel {
  list: CityDataModel[] | null;
  title?: string;
}

export const CitiesList: React.FC<ItemsListModel> = ({ list, title }) => {
  const { location } = useAppSelector((state) => state.userData);
  const { currentDisplayed } = useAppSelector((state) => state.weatherSlice);
  const token = useAppSelector((state) => state.loginData.userData?.token);
  const dispatch = useAppDispatch();

  const formattedList = useMemo(() => {
    if (list === null) {
      return [];
    } else {
      return list.map((city: CityDataModel) => (
        <StyledCityListItem
          isActive={currentDisplayed!.name === city.name}
          key={city.name}
        >
          <StyledCityName>{city.name}</StyledCityName>
          <Button
            name='wybierz'
            clicked={() => dispatch(setCurrentDisplayed(city))}
            variant='inline'
            type='confirm'
          />
          <Button
            name='usuń'
            clicked={() =>
              dispatch(deleteCityWeather(city.id, token as string))
            }
            variant='inline'
            type='danger'
          />
        </StyledCityListItem>
      ));
    }
  }, [list, dispatch, currentDisplayed, token]);

  return (
    <>
      {title && <h3>{title}</h3>}
      <StyledCityList>
        {location && (
          <StyledCityListItem
            isActive={currentDisplayed!.name === 'Twoja lokalizacja'}
            key='yourPositon'
          >
            <StyledCityName>Twoja pozycja</StyledCityName>
            <Button
              name='wybierz'
              clicked={() => dispatch(setCurrentDisplayed(location))}
              variant='inline'
              type='confirm'
            />
          </StyledCityListItem>
        )}
        {formattedList.length ? formattedList : <h4>brak dodanych miejsc</h4>}
      </StyledCityList>
    </>
  );
};
