import styled from 'styled-components';

export const StyledCityList = styled.ul`
  background: ${({ theme }) => theme.bg.primary};
  color: ${({ theme }) => theme.color.main};
  overflow: auto;
  max-height: 300px;
  padding: 5px auto;
`;

export const StyledCityListItem = styled.li<{ isActive: boolean }>`
  background: ${({ theme, isActive }) =>
    isActive ? 'green' : theme.bg.secondary};
  color: ${({ theme }) => theme.color.main};
  box-shadow: 2px 3px 5px;
  border: 1px solid;
  border-radius: 5px;
  list-style: none;
  width: 350px;
  padding: 5px;
  margin: 8px auto;
`;

export const StyledCityName = styled.h4`
  width: 200px;
  height: 100%;
  display: inline-block;
`;
