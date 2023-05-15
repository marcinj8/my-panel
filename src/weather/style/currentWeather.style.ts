import Styled from 'styled-components';

export const StyledCurrentWeather = Styled.section`
    position: relative; 
    width: 95%;
    margin: 0 auto;
    padding: 45px 10px 20px 10px;
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
    position: relative;
    heigth: 150px;
    width: 150px;
    @media (min-width: ${(props) => props.theme.devices.tablet}) {
        top:-20px;
    }
`;
