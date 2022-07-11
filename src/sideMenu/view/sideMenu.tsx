import React, { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

import { Button } from '../../shared/components';

import { toggleMenu } from '../../store/userSettings/reducer';
import { hideSideMenu, showSideMenu } from '../animations/sideMenuAnimation';

import { StyledSideMenu } from '../style/sideMenu.style';

export const SideMenu: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isMenuShow } = useAppSelector((state) => state.userSettings);
  const sideMenuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sideMenuRef.current === null) {
      return;
    }
    if (isMenuShow) {
      showSideMenu(sideMenuRef.current);
    } else {
      hideSideMenu(sideMenuRef.current);
    }
  });

  return (
    <StyledSideMenu ref={sideMenuRef}>
      <h3>settings</h3>
      <ul>
        <li>theme</li>
        <li>weather</li>
        <li>currency</li>
        <li>my finances</li>
        <li>calendar</li>
        <li>email</li>
        <Button
          variant='inline'
          type='danger'
          name='close'
          clicked={() => dispatch(toggleMenu(false))}
        />
      </ul>
    </StyledSideMenu>
  );
};
