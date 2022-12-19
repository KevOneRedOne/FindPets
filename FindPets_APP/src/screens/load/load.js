import React from 'react';
// eslint-disable-next-line no-unused-vars
import { StatusBar, SafeAreaView, TouchableOpacity, Text, Image, Button } from 'react-native';
import styled from 'styled-components';

const Load = ({navigation}) => {
    return (
        <StyledSafeAreaView>
            <StyledLogo
                source={require('../../assets/logo/logoBlanc.png')}
            />
            <StyledTitle>FindPets</StyledTitle>
            <StyledTouchableOpacity title="Connexion"
            onPress={() => navigation.navigate('Login')}>
                <StyledText>CONNEXION</StyledText>
            </StyledTouchableOpacity>
            <StyledTouchableOpacity
            onPress={() => navigation.navigate('Register')}>
                <StyledText>INSCRIPTION</StyledText>
            </StyledTouchableOpacity>
            {/* Styled component doesn't support StatusBar */}
            <StatusBar barStyle="light-content" backgroundColor={'rgb(36,113,30)'} />
        </StyledSafeAreaView>
    );
};


//--------------Styled Components----------------
const StyledSafeAreaView = styled.SafeAreaView`
    flex: 1;
    width: 100%;
    align-items: center;
    justify-content: center;
    background-color: rgb(36,113,30);
`;

const StyledLogo = styled.Image`
    width: 110px;
    height: 110px;
    margin-bottom: 20px;
`;

const StyledTitle = styled.Text`
    color: white;
    font-size: 35px;
    margin-bottom: 200px;
`;

const StyledTouchableOpacity = styled.TouchableOpacity`
    color: white;
    padding: 10px;
    width: 65%;
    margin: 20px;
    border-radius: 50px;
    border: 1px solid white;
`;

const StyledText = styled.Text`
    align-self: center;
    color: white;
    font-size: 17px;
`;


export default Load;
