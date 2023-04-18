import styled from 'styled-components';

export const StyledCitiesResultSection = styled.section`
  color: ${({ theme }) => theme.color.main};
`;

export const StyledCitiesResultList = styled.ul`
  color: ${({ theme }) => theme.color.main};
  overflow: auto;
`;

export const StyledCitiesResultListItem = styled.li`
  color: ${({ theme }) => theme.color.main};
  background: ${({ theme }) => theme.bg.main};
  margin: ox auto;
  list-style-type: none;
  padding: 10px;
  margin: 10px auto;
  border: 1px solid transparent;
  border-radius: 3px;
  cursor: pointer;
  box-shadow: 2px 3px 5px;
  width: 90%;
  transition: all 0.2s;
  &:hover {
    border: 1px solid black;
  }
`;

export const StyledPlaceExistTitle = styled.h2`
  color: ${({ theme }) => theme.color.main};
  margin: 80px auto;
`;
