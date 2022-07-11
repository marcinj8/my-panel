import styled from 'styled-components';

export const StyledInputBox = styled.div<{ flexDirection: 'row' | 'column' }>`
  margin: 5px auto;
  color: ${({ theme }) => theme.color.main};
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
`;

export const StyledInputLabel = styled.label`
  margin: 5px auto;
  color: ${({ theme }) => theme.color.main};
`;

export const StyledInput = styled.input`
  width: 200px;
  padding: 5px;
  margin: 5px auto;
  box-shadow: 1px 2px 3px;
  background: ${({ theme }) => theme.bg.main};
  color: ${({ theme }) => theme.color.main};
  border: ${({ theme }) => '1px solid ' + theme.border.main};
  border-radius: 5px;
  outline: none;
  transition: all 0.2s;
  &:active,
  :focus {
    box-shadow: 3px 4px 5px;
    transform: scale(1.05);
  }
`;
