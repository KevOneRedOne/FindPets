import styled from 'styled-components';

//--------------Styled Components----------------
const ContainerStyled = styled.View`
    justify-content: center;
    align-items: center;
    background-color: rgb(36,113,30);
    height: 15%;
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
    margin-top: 15%;
    height: 90%;
`;

const TextStyled = styled.Text`
    margin-top: 30px;
    color: #000;
    font-size: 15px;
    font-weight: lighter;
    letter-spacing: 2px;
`;

export { ContainerStyled, TextTitleStyled, BarStyle, ContainerBisStyled, TextStyled };
