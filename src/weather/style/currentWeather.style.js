import Styled from 'styled-components';

export const StyledCurrentWeather = Styled.section`
    width: 95%;
    margin: 0 auto;
    padding: 45px 10px;
    display: flex;
    div{
        width: 50%;
    }
`;

export const StyledCurrentWeatherTitle = Styled.h4`
    text-align: left;
    padding-top: 30px;
`;

export const StyledCurrentWeatherBigData = Styled.div`
    text-align: left;
    font-size: 3rem;
`;

export const StyledCurrentWeatherData = Styled.div`
    text-align: left;
`;

export const StyledCurrentWeatherImg = Styled.img`
    text-align: right;
    heigth: 200px;
    width: 200px;
`;
