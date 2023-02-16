import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledSideMenu = styled.menu`
  position: fixed;
  top: 6vh;
  width: 300px;
  height: 100vh;
  border-right: 1px solid black;
  box-shadow: 2px 3px 5px black;
  background: ${({ theme }) => theme.bg.main};
  z-index: 10;
  @media (min-width: ${(props) => props.theme.devices.desktop}) {
    width: 200px;
  }
`;

export const StyledSideMenuItem = styled(NavLink)`
  display: block;
  margin: 5px;
  padding: 5px;
  border: 1px solid black;
`;
