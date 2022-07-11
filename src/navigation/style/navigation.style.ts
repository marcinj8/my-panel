import styled from 'styled-components';

export const StyledNav = styled.nav`
  /* position: fixed; */
  width: 100%;
  box-shadow: 0 3px 10px;
  padding: 5px;
  background: ${({ theme }) => theme.bg.secondary};
  border-bottom: 1px solid black;
  display: flex;
  z-index: 10;
  justify-content: space-between;
`;
