import styled from 'styled-components';

//--------------Styled Components----------------

const StyledViewContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 350px;
    margin-top: 520px;
    margin-left: 20px;
    position: absolute;
    height: 90px;
`;

const StyledTouchableOpacity = styled.TouchableOpacity`
    width: 60px;
    height: 60px;
    align-items: center;
    justify-content: center;
    border-radius: 50px;    
    border: 2px solid lightgray;
`;

const StyledImage = styled.Image`
    width: 32px;
    height: 32px;
`;

export { StyledViewContainer, StyledTouchableOpacity, StyledImage };
