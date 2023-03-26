import styled from 'styled-components';

export const StyledHocSection = styled.section<{ isMenuShow: boolean }>`
  position: absolute;
  min-height: 100vh;
  padding: 80px 0 0 0;
  right: 0;
  background: ${({theme}) => theme.bg.main};
  width: 100%;
  margin: 0;
  transition: all 0.3s;
  @media (min-width: ${(props) => props.theme.devices.desktop}) {
    width: ${({ isMenuShow }) => (isMenuShow ? 'calc(100% - 200px)' : '100%')};
  }
`;
