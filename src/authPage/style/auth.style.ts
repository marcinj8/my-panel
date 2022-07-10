import styled from 'styled-components';

export const StyledAuthView = styled.section`
  min-height: 100vh;
  padding: 50px 0;
  background: ${({ theme }) => theme.bg.main};
  color: ${({ theme }) => theme.color.main};
`;

export const StyledAuthTitle = styled.h2`
  color: ${({ theme }) => theme.color.main};
`;

export const StyledAuthForm = styled.form`
  margin: 20px auto 0 auto;
  padding: 20px;
  background: ${({ theme }) => theme.bg.secondary};
  color: ${({ theme }) => theme.color.secondary};
  border: ${({ theme }) => '2px solid ' + theme.border.main};
  min-width: 250px;
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 3px 4px 5px black;
`;
