import styled from 'styled-components';

export const StyledHomeContainer = styled.section<{isMenuShow: boolean}>`
  position: absolute;
  height: 100vh;
  padding: 8vh;
  right: 0;
  background: purple;
  width: ${({ isMenuShow }) => (isMenuShow ? 'calc(100% - 200px)' : '100%')};
  margin: 0;
  transition: all .3s;
`;
