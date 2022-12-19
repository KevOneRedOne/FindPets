import React from 'react';
import { Text, View, StatusBar} from 'react-native';
import styled from 'styled-components';
import axios from 'axios';
import { API_URL } from '@env';

const Register = () => {
    const [inputs, setInputs] = React.useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
    });
    const handleRegister = async () => {
        axios({
            method: 'post',
            url: `${API_URL}/auth/register`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            data: {
                firstname: inputs.firstname,
                lastname: inputs.lastname,
                email: inputs.email,
                password: inputs.password,
            },
        })
        .then(async response => {
            console.log(response.data);
            console.log(response.data.message);
        })
        .catch(error => {
            console.log(error);
        });
    };


    return (
        <View>
            <Text>Register</Text>
            <TextInputContainer>
                <TextInputStyled
                value={inputs.firstname}
                onChangeText={text => setInputs({...inputs, firstname: text})}
                />
            </TextInputContainer>
            <TextInputContainer>
                <TextInputStyled
                value={inputs.lastname}
                onChangeText={text => setInputs({...inputs, lastname: text})}
                />
            </TextInputContainer>
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
            <StyledTouchableOpacity onPress={handleRegister}>
                <StyledText>INSCRIPTION</StyledText>
            </StyledTouchableOpacity>
            <StatusBar barStyle="dark-content" backgroundColor="#ffff"/>
        </View>
    );
};

//--------------Styled Components----------------
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

export default Register;
