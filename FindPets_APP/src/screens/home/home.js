import React from 'react';
import { StatusBar, SafeAreaView, TouchableOpacity, Text, Image, Button } from 'react-native';
import styled from 'styled-components';

const Home = ({navigation}) => {
    return (
        <StyledSafeAreaView>
            <StyledLogo 
                source={require('../../assets/logo/logoBlanc.png')}
            />
            <StyledTitle>FindPets</StyledTitle>
            <StyledTouchableOpacity title="Connexion"
            onPress={() => navigation.navigate('Login')}>
                <StyledText>Connexion</StyledText>
            </StyledTouchableOpacity>
            <StyledTouchableOpacity
            onPress={() => navigation.navigate('Register')}>
                <StyledText>Inscription</StyledText>
            </StyledTouchableOpacity>
            {/* Styled component doesn't support StatusBar */}
            <StatusBar barStyle="light-content" backgroundColor={'rgb(36,113,30)'} />
        </StyledSafeAreaView>
    );
};


//--------------Styled Components----------------
const StyledSafeAreaView = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: rgb(36,113,30);
`;

const StyledLogo = styled.Image`
    width: 100px;
    height: 100px;
    margin-bottom: 20px;
`;

const StyledTitle = styled.Text`
    color: white;
    font-size: 30px;
    margin-bottom: 100px;
`;

const StyledTouchableOpacity = styled.TouchableOpacity`
    color: white;
    padding: 15px;
    margin: 10px;
    border-radius: 50px;
    border: 1px solid white;
`;

const StyledText = styled.Text`
    align-self: center;
    color: white;
    font-size: 15px;
`;


export default Home;
