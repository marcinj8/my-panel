import styled from 'styled-components';

export const StyledButtonDefault = styled.button<{ btnType: string }>`
  width: 150px;
  margin: 5px auto;
  padding: 5px;
  background: ${({ theme, btnType }) => theme.btBg[btnType]};
  color: ${({ theme }) => theme.color.main};
  border: ${({ theme }) => '1px solid ' + theme.border.main};
  border-radius: 5px;
  cursor: pointer;
  &:disabled {
    background: lightgray;
    cursor: default;
    color: gray;
    border: 1px solid gray;
  }
`;

export const StyledButton = styled(StyledButtonDefault)`
  background: ${({ theme, btnType }) => theme.btBg[btnType]};
  color: ${({ theme }) => theme.color.main};
  border: ${({ theme }) => '1px solid ' + theme.border.main};
  border-radius: 5px;
`;

export const StyledButtonInnline = styled(StyledButtonDefault)`
  width: 200px;
  background: transparent;
  color: ${({ theme }) => theme.color.main};
  border: none;
  &:disabled {
    background: transparent;
    cursor: default;
    color: gray;
    border: none;
  }
`;
