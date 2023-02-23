import styled from 'styled-components';

export const StyledNav = styled.nav`
  position: fixed;
  width: 100%;
  height: 6vh;
  padding: 5px;
  background: ${({ theme }) => theme.bg.secondary};
  border-bottom: 1px solid black;
  display: flex;
  z-index: 99;
  justify-content: space-between;
  box-shadow: 2px 3px 10px black;
`;
