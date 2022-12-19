import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import styled from 'styled-components';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {API_URL} from '@env';

const Login = () => {
    const [inputs, setInputs] = React.useState({
        email: '',
        password: '',
    });

    const handleLogin = async () => {
        axios({
            method: 'post',
            // url: 'http://10.0.2.2:3001/api/findpets/v1/auth/login',
            url: `${API_URL}/auth/login`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            data: {
                email: inputs.email,
                password: inputs.password,
            }
        })
        .then(async response => {
            console.log(response.data);
            console.log(response.data.token);
            // console.log(response.headers['x-access-token']);
            await AsyncStorage.setItem('token', response.data.token).then(() => {
                console.log(response.data.message);
                console.log('Token saved in async storage');
            }).catch((error) => {
                console.log(error);
            });
        })
        .catch(error => {
            console.log(error);
        });
    };
    return (
        <View>
            <Text>Login</Text>
            <Text>{API_URL}</Text>
            <TextInputContainer>
                <TextInputStyled
                value={inputs.email}
                 onChangeText={text => setInputs({...inputs, email: text})}
                />
            </TextInputContainer>
            <TextInputContainer>
                <TextInputStyled
                value={inputs.password}
                onChangeText={text => setInputs({...inputs, password: text})}
                secureTextEntry={true}
                />
            </TextInputContainer>
            <StyledTouchableOpacity onPress={handleLogin}>
                <StyledText>CONNEXION</StyledText>
            </StyledTouchableOpacity>
            <StatusBar barStyle="dark-content" backgroundColor="#ffff"/>
        </View>
    );
};

const TextInputContainer = styled.View`
  margin: 10px;
`;

const TextInputStyled = styled.TextInput`
  background-color: green;
  padding: 12px;
  border-radius: 12px;
  border: 2px solid #000;
  color: white;
`;

const StyledTouchableOpacity = styled.TouchableOpacity`
    padding: 10px;
    width: 65%;
    margin: 20px;
    border-radius: 50px;
    border: 1px solid green;
`;

const StyledText = styled.Text`
    align-self: center;
    color: green;
    font-size: 17px;
`;

export default Login;
