import styled from 'styled-components';

export const StyledSideMenu = styled.menu`
  position: fixed;
  width: 200px;
  height: 100vh;
  border-right: 1px solid black;
  box-shadow: 2px 3px 5px black;
  background: ${({ theme }) => theme.bg.main};
  z-index: 10;
`;
