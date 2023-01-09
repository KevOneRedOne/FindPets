import React from 'react';
import {View} from 'react-native';
import Button from '../../components/Buttons/buttonlogin';


const Menu = ({navigation}) => {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button title={'Mon Compte'} color={'white'} onPress={() => navigation.navigate('Mon compte')} backgroundColor="rgb(0,128,255)"/>
        <Button title={'Paramètres'} color={'white'} onPress={() => navigation.navigate('Paramètres')} backgroundColor="rgb(0,128,255)"/>
      </View>
    );
};

export default Menu;
