import Styled from 'styled-components';

export const StyledCurrentWeatherDetails = Styled.section`
    width: 100%;
    display: flex;
    padding: 10px;
    flex-wrap: wrap;
    background: linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 20%);
    div {
        width: 50%;
        min-width: 90px;
        padding: 10px;
        align-self: center;
        text-align: left;
        
    }
    @media(min-width: 650px){
        flex-wrap: nowrap;
    }
`;

export const StyledCWDTitle = Styled.h6`
    padding: 0 10px;
    width: 100%;
    font-weight: normal
`;
