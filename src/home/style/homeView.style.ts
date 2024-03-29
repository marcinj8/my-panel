import styled from 'styled-components';

export const StyledHomeContainer = styled.section<{isMenuShow: boolean}>`
  position: absolute;
  height: 100vh;
  padding: 8vh;
  right: 0;
  background: purple;
  width: 100%;
  margin: 0;
  transition: all .3s;
  @media(min-width: ${props => props.theme.devices.desktop}) {
  width: ${({ isMenuShow }) => (isMenuShow ? 'calc(100% - 200px)' : '100%')};
  }
`;
