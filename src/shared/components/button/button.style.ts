import styled from 'styled-components';

export const StyledButtonDefault = styled.button<{
  btnType: string;
  bTnCenter: boolean;
}>`
  width: 150px;
  margin: ${({ bTnCenter }) => (bTnCenter ? '8px auto' : '8px')};
  padding: 5px;
  background: ${({ theme, btnType }) => theme.btBg[btnType]};
  color: ${({ theme }) => theme.color.main};
  border: ${({ theme }) => '1px solid ' + theme.border.main};
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.1s;
  outline: none;
  &:disabled {
    background: lightgray;
    cursor: default;
    color: gray;
    border: 1px solid gray;
  }
`;

export const StyledButton = styled(StyledButtonDefault)`
  box-shadow: 3px 4px 5px gray;
  background: ${({ theme, btnType }) => theme.btBg[btnType]};
  color: ${({ theme }) => theme.color.main};
  border: ${({ theme }) => '1px solid ' + theme.border.main};
  border-radius: 5px;
  &:hover {
    transform: scale(1.02);
  }
`;

export const StyledButtonInnline = styled(StyledButtonDefault)`
  background: transparent;
  color: ${({ theme, btnType }) => theme.color[btnType]};
  border: none;
  &:disabled {
    background: transparent;
    cursor: default;
    color: gray;
    border: none;
  }
`;
