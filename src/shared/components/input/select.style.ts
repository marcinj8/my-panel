import styled from 'styled-components';

export const StyledSelect = styled.select`
  width: 100px;
  text-align: center;
  margin: 10px auto;
  padding: 8px;
  border-radius: 5px;
  outline: none;
  border: ${({ theme }) => '1px solid ' + theme.border.main};
  background: ${({ theme }) => theme.bg.secondary};
  color: ${({ theme }) => theme.color.main};
  box-shadow: 2px 3px 5px black;
`;

export const StyledOption = styled.option`
  padding: 10px;
`;
