import styled from 'styled-components';

export const StyledModal = styled.div`
  position: fixed;
  top: 30%;
  left: calc(50% - 300px);
  width: 600px;
  min-height: 300px;
  padding: 10px;
  border: 1px solid white;
  border-radius: 5px;
  background: ${({ theme }) => theme.bg.secondary};
  box-shadow: 5px 5px 15px black;
  z-index: 99;
`;

export const StyledBackdrop = styled.div<{ mobileOnly: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.66);
  z-index: 90;
  @media (min-width: ${({ theme }) => theme.devices.desktop}) {
    display: ${({ mobileOnly }) => (mobileOnly ? 'none' : 'block')};
  }
`;
