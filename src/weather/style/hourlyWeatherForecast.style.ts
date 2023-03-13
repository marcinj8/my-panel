import Styled from 'styled-components';

export const StyledHourlyForecast = Styled.ul`
    width: 100%;
    display: flex;
    padding: 10px 5px;
    list-style-type: none;
    border-top: 1px solid rgba(256, 256,256 ,.4);
    border-bottom: 1px solid rgba(256, 256,256 ,.4);
    overflow-x: scroll;
    &::-webkit-scrollbar {
        -webkit-appearance: none;
        width: 15px;
        height: 2px;
    }
    &::-webkit-scrollbar-track {
        border-radius: 10px;
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
    }
    &::-webkit-scrollbar-thumb {
        background-color: darkgrey;
        border: 1px solid white;
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
        border-radius: 10px
    }
`;

export const StyledHourForecast = Styled.li`
    width: 20%;
    min-width: 60px;
    padding: 10px
`;

export const StyledHourlyForecastDate = Styled.h6`
    margin: 5px;
`;

export const StyledHourlyForecastTemp = Styled.div`
    margin: 5px;
`;
