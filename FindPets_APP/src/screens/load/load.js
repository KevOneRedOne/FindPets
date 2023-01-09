import React from 'react';
import { StatusBar } from 'react-native';
import { StyledSafeAreaView, StyledTitle } from '../../assets/styles/load.styles';
import Button from '../../components/Buttons/buttonlogin';
import Logo from '../../components/Logo/logo';

const Load = ({navigation}) => {
    return (
        <StyledSafeAreaView>
            <Logo width={'110px'} height={'110px'}/>
            <StyledTitle>FindPets</StyledTitle>
            <Button title="CONNEXION" onPress={() => navigation.navigate('Login')} color="white"/>
            <Button title="INSCRIPTION" onPress={() => navigation.navigate('Register')} color="white"/>
            {/* Styled component doesn't support StatusBar */}
            <StatusBar barStyle="light-content" backgroundColor={'rgb(36,113,30)'} />
        </StyledSafeAreaView>
    );
};

export default Load;
