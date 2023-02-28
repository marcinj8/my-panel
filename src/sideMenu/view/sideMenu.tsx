import React, { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

import { Button } from '../../shared/components';

import { toggleMenu } from '../../store/userSettings/reducer';
import { hideSideMenu, showSideMenu } from '../animations/sideMenuAnimation';
import { pagesData } from '../data';

import { StyledSideMenu, StyledSideMenuItem } from '../style/sideMenu.style';
import { Backdrop } from '../../shared/components/modal/modal';

export const SideMenu: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isMenuShow } = useAppSelector((state) => state.userSettings);

  const sideMenuRef = useRef<HTMLElement>(null);
  const navLinkRef = useRef<HTMLAnchorElement>(null);

  const links = pagesData.map((item) => (
    <StyledSideMenuItem key={item.name} ref={navLinkRef} to={item.link}>
      {item.name}
    </StyledSideMenuItem>
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
    <>
      <Backdrop
        show={isMenuShow}
        clicked={() => dispatch(toggleMenu(false))}
        mobileOnly
      />
      <StyledSideMenu ref={sideMenuRef}>
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
    </>
  );
};
