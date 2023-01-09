import styled from 'styled-components';

//--------------Styled Components----------------

const StyledViewContainer = styled.View`
    display: flex;
    margin-top: 20px;
    margin-left: 20px;
    width: 350px;
    height: 480px;
    background-color: lightgray;
    border: solid 1px gray;
    border-radius: 20px;
    align-items: center;
`;

const StyledImage = styled.Image`
    width: 350px;
    height: 400px;
    border-radius: 20px;
`;

const StyledViewDiv = styled.View`
    align-items: center;
    justify-content: space-around;
    width: 350px;
    height: 95px;
    margin-top: -10px;
    background-color: #ffff;
    border-radius: 20px;
    border: solid 1px gray;
`;

const StyledDiv = styled.View`
    flex-direction: row;
    justify-content: space-around;
    width: 350px;
`;

const StyledTextTitle = styled.Text`
    font-size: 18px;
    font-family: 'Roboto';
    letter-spacing: 2px;
    font-weight: bold;
    color: #000;
`;


export { StyledViewContainer, StyledViewDiv, StyledImage, StyledTextTitle, StyledDiv };
