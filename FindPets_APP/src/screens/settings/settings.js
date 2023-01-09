import React from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../../components/Buttons/buttonlogin';


const Settings = ({ navigation }) => {

    const Logout = () => {
        AsyncStorage.getAllKeys().then((data) => {
            AsyncStorage.multiRemove(data).then(() => {
                console.log('Logout successfull');
                navigation.navigate('Load');
            }).catch((error) => {
                console.log('Error with the storage clear : ', error);
            });
        }).catch((error) => {
            console.log('Error when collecting all keys in storage : ', error);
        });
    };
    return (
        <View>
            <Button title="DECONNEXION" onPress={Logout} color="red" backgroundColor="#F5F5F5"/>
        </View>
    );
};

export default Settings;
