import styled from 'styled-components';

export const StyledModal = styled.div`
  position: fixed;
  top: 30%auto;
  left: calc(50% - 300px);
  width: 600px;
  min-height: 300px;
  border: 1px solid white;
  background: silver;
  z-index: 99;
`;

export const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 90;
`;
