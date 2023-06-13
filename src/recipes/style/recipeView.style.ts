import styled from 'styled-components';

export const StyledRecipeSection = styled.section`
  position: 'absolute';
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 5px;
  background: ${({ theme }) => theme.bg.secondary};
`;

export const StyledRecipeHeader = styled.header`
  border-bottom: 1px solid black;
  padding: 10px;
  margin: 10px auto;
`;

export const StyledRecipeName = styled.h2`
  border-bottom: 1px solid black;
  padding: 10px;
  margin: 10px auto;
`;

export const StyledRecipeTagTitle = styled.h5`
  padding: 10px;
`;

export const StyledRecipeTags = styled.span`
  padding: 10px;
`;