import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/login/login.js';
import Register from '../screens/register/register.js';
import Load from '../screens/load/load.js';
import Home from '../screens/home/home.js';
import Settings from '../screens/settings/settings.js';
import UserAccount from '../screens/userAccount/userAccount.js';
import Pet from '../screens/findpets/pet.js';

const Stack = createNativeStackNavigator();

const Endpoints = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Load"
                    component={Load}
                    options={{headerShown: false}} />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{headerShown: false}} />
                <Stack.Screen
                    name="Register"
                    component={Register}
                    options={{headerShown: false}} />
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{headerShown: false}} />
                <Stack.Screen
                    name="Paramètres"
                    component={Settings}
                    options={{
                        headerTitleStyle:{fontSize: 20, fontFamily: 'Roboto', fontWeight: 'bold', letterSpacing: 1.5},
                        headerTintColor:'rgb(36,113,30)',
                        headerStyle:{borderBottomColor:'rgb(36,113,30)', borderBottomWidth:1},
                    }}
                />
                <Stack.Screen
                    name="Mon compte"
                    component={UserAccount}
                    options={{
                        headerTitleStyle:{fontSize: 20, fontFamily: 'Roboto', fontWeight: 'bold', letterSpacing: 1.5},
                        headerTintColor:'rgb(36,113,30)',
                        headerStyle:{borderBottomColor:'rgb(36,113,30)', borderBottomWidth:1},
                    }}
                />
                <Stack.Screen
                    name="Pet"
                    component={Pet}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Endpoints;
