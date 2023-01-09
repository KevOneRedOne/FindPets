import styled from 'styled-components';

//--------------Styled Components----------------

const StyledViewContainer = styled.View`
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    margin-left: 20px;
    width: 350px;
    align-items: flex-start;
`;

const StyledViewDiv = styled.View`
    /* flex-direction: row; */
    align-items: center;
    width: 350px;
    border-radius: 20px;
    margin-bottom: 20px;
`;

const StyledTextTitle = styled.Text`
    font-size: 18px;
    font-family: 'Roboto';
    letter-spacing: 2px;
    font-weight: bold;
    color: #000;
`;

const StyledSubTitle = styled.Text`
    font-size: 16px;
    font-family: 'Roboto';
    letter-spacing: 2px;
    font-weight: bold;
    color: orange;
`;

export { StyledViewContainer, StyledTextTitle, StyledViewDiv, StyledSubTitle };
