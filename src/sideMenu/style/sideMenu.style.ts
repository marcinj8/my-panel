import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledSideMenu = styled.menu`
  position: fixed;
  top: 60px;
  width: 300px;
  height: 100vh;
  border-right: 1px solid black;
  box-shadow: 2px 3px 5px black;
  background: ${({ theme }) => theme.bgMenu.main};
  z-index: 99;
  @media (min-width: ${(props) => props.theme.devices.desktop}) {
    width: 200px;
  }
`;

export const StyledSideMenuItem = styled(NavLink)<{ selected?: boolean }>`
  display: block;
  margin: 10px 5px;
  padding: 5px;
  box-shadow: 1px 2px 3px black;
  border: 1px solid black;
  border-radius: 5px;
  background: ${({ theme, selected }) =>
    selected ? theme.bgMenuHover.secondary : theme.bgMenu.secondary};
  color: ${({ theme }) => theme.color.main};
  transition: all 0.1s;
  text-decoration: none;
  :hover {
    background: ${({ theme }) => theme.bgMenuHover.secondary};
    transform: scale(1.02);
  }
  
`;
