import styled from 'styled-components';

//--------------Styled Components----------------
const ContainerStyled = styled.View`
    justify-content: center;
    align-items: center;
    background-color: rgb(36,113,30);
    height: 13%;
`;

const TextTitleStyled = styled.Text`
    color: #ffff;
    font-size: 25px;
    font-weight: lighter;
    letter-spacing: 5px;
`;

const BarStyle = styled.View`
    background-color: #F5F5F5;
    border: 1px solid #F5F5F5;
    height: 1px;
    margin-top: 10px;
    width: 120px;
`;

const ContainerBisStyled = styled.View`
    background-color: #F5F5F5;
    display: flex;
    align-items: center;
    margin-top: 1%;
    height: 90%;
`;

const TextStyled = styled.Text`
    color: #000;
    font-size: 15px;
    font-weight: lighter;
    letter-spacing: 2px;
    margin-top: 5px;
`;

const TextLinkStyled = styled.Text`
    color: blue;
    font-size: 15px;
    margin-top: 10px;
    font-weight: lighter;
    text-decoration: underline;
    letter-spacing: 2px;
`;

export { ContainerStyled, TextTitleStyled, BarStyle, ContainerBisStyled, TextStyled, TextLinkStyled };
