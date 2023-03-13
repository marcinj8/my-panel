import Styled from 'styled-components';

export const StyledDailyForecast = Styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px 0;
    list-style-type: none;
`;

export const StyledDayForecast = Styled.li`
    margin: 2px 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    div {
        width: 25%;
        display: flex;
        justify-content: center;
        align-self: center
    }
    h4 {
        width: 25%;
        display: flex;
        justify-content: left;
        align-self: center
    }
`;