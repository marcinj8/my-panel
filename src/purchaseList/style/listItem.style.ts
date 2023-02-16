import styled from 'styled-components';

export const StyledListItem = styled.li<{ purchased: boolean }>`
  list-style-type: none;
  width: 300px;
  margin: 10px auto;
  padding: 5px;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 6px 2px 8px;
  background: ${({ theme, purchased }) =>
    purchased ? 'green' : theme.bg.secondary};
  transition: all 0.2s ease-in-out;
  text-align: center;
  &:hover {
    transform: scale(1.03);
    box-shadow: 8px 3px 14px;
  }
  @media (min-width: ${(props) => props.theme.devices.desktop}) {
    text-align: left;
    width: 90%;
    & h3 {
      display: inline;
      padding: 5px;
    }
    & div {
      display: inline;
      padding: 5px;
    }
  }
`;
