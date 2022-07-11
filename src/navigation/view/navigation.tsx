import React from 'react';
import { Button } from '../../shared/components';
import { UseTime } from '../../shared/hooks/time-hook';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { logoutUser } from '../../store/loginSlice/actions';
import { toggleMenu } from '../../store/userSettings/reducer';
import { StyledNav } from '../style/navigation.style';

export const Navigation = () => {
  const dispatch = useAppDispatch();
  const { isMenuShow } = useAppSelector((state) => state.userSettings);
  const { day, month, year } = UseTime();

  return (
    <StyledNav>
      <Button
        bTnCenter={false}
        variant='inline'
        name='MENU'
        clicked={() => dispatch(toggleMenu(!isMenuShow))}
      />
      <div style={{ padding: '10px' }}>
        Today {day}/{month}/{year}
      </div>
      <Button
        bTnCenter={false}
        type='danger'
        name='logout'
        clicked={() => dispatch(logoutUser())}
      />
    </StyledNav>
  );
};
