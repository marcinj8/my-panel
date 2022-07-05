import styled from 'styled-components';

export const StyledAuthView = styled.section`
  min-height: 100vh;
  background: ${({ theme }) => theme.bg.main};
  color: ${({ theme }) => theme.color.main};
`;

export const StyledAuthTitle = styled.h3`
  color: ${({ theme }) => theme.color.main};
`;

export const StyledAuthForm = styled.form`
  position: absolute;
  top: 30%;
  left: 50%;
  background: ${({ theme }) => theme.bg.main};
  color: ${({ theme }) => theme.color.secondary};
  border: ${({ theme }) => '2px solid ' + theme.border.main};
  min-width: 300px;
  width: 95%;
  max-width: 600px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  transform: translateX(-50%);
  border-radius: 5px;
  box-shadow: 3px 4px 5px  black;
`;
