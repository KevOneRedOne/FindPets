import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/login/login.js';
import Register from '../screens/register/register.js';
import Home from '../screens/home/home.js';

const Stack = createNativeStackNavigator();

const Endpoints = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{headerShown: false}} />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{title: 'Connexion'}} />
                <Stack.Screen
                    name="Register"
                    component={Register}
                    options={{title: 'Inscription'}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Endpoints;
