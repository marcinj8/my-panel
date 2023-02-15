import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

import { Button } from '../../shared/components';

import { toggleMenu } from '../../store/userSettings/reducer';
import { hideSideMenu, showSideMenu } from '../animations/sideMenuAnimation';
import { pagesData } from '../data';

import { StyledSideMenu } from '../style/sideMenu.style';

export const SideMenu: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isMenuShow } = useAppSelector((state) => state.userSettings);
  const sideMenuRef = useRef<HTMLElement>(null);

  const links = pagesData.map((item) => (
    <li key={item.name}>
      <NavLink to={item.link}>{item.name}</NavLink>
    </li>
  ));

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
      <h3>ustawienia</h3>
      <ul>
        {links}
        <li>kalendarz</li>
        <li>email</li>
        <Button
          variant='inline'
          type='danger'
          name='zamknij'
          clicked={() => dispatch(toggleMenu(false))}
        />
      </ul>
    </StyledSideMenu>
  );
};
