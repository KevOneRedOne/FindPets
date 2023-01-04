import styled from 'styled-components';

//--------------Styled Components----------------
const StyledSafeAreaView = styled.SafeAreaView`
    flex: 1;
    width: 100%;
    align-items: center;
    justify-content: center;
    background-color: rgb(36,113,30);
`;

const StyledTitle = styled.Text`
    color: white;
    font-size: 35px;
    margin-bottom: 200px;
`;

export { StyledSafeAreaView, StyledTitle };
