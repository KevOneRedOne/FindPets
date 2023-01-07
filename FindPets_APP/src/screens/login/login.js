/* eslint-disable no-useless-escape */
/* eslint-disable no-alert */
import React, { useEffect } from 'react';
import { View, StatusBar} from 'react-native';
import { ContainerStyled, TextTitleStyled, BarStyle, ContainerBisStyled, TextStyled } from '../../assets/styles/login.styles';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from '@env';
import Button from '../../components/Button_Login/button';
import TextInputCustom from '../../components/Text_Input/textInputCustom';


const Login = ({navigation}) => {
    const [inputs, setInputs] = React.useState({
        //TODO: remove data and let empty
        // email: '',
        email: 'kevin@admin.fr',
        password: '',
    });

    useEffect(() => {
        AsyncStorage.getItem('token').then(token => {
            if (token) {
                navigation.navigate('Home');
            }
        });
    });

    const handleLogin = async () => {
        const checkEmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const checkPasswordRegex = /^.*(?=.{6,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%&? "]).*$/; // Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character
        const checkPasswordLength = 8;

        if (inputs.email === '' || inputs.password === '') {
            alert('Email ou mot de passse vide', 'Veuillez remplir tous les champs.');
        } else if (!inputs.email.toLowerCase().match(checkEmailRegex)) {
            console.log('Email is not valid');
            alert('Email non valide !\n\nVeuillez renseigner un email valide (exemple@exemple.fr).');
        } else if (inputs.password.length < checkPasswordLength) {
            alert('Mot de passe trop court !\n\nVeuillez renseigner un mot de passe d\'au moins 8 caractères.');
        } else if (!inputs.password.match(checkPasswordRegex)) {
            alert('Mot de passe non valide !\n\nVeuillez renseigner un mot de passe contenant au moins une majuscule, une minuscule, un chiffre et un caractère spécial.');
        } else {
            axios({
                method: 'post',
                url: `${API_URL}/auth/login`,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                data: {
                    email: inputs.email,
                    password: inputs.password,
                },
            })
            .then(async response => {
                console.log('Response from the API : ', response.data.message);
                await AsyncStorage.setItem('token', response.data.token).then(() => {
                    AsyncStorage.setItem('user_id', response.data.user_id.toString()).then(() => {
                        console.log('Token and UserID saved in async storage');
                        navigation.navigate('Home');
                    }).catch((error) => {
                        console.log('Error with the AsyncStorage',error);
                    });
                }).catch((error) => {
                    console.log('Error with the AsyncStorage',error);
                });
            })
            .catch(error => {
                console.log('Error with the Api', error);
                alert('Email ou mot de passe introuvable !\n\nVeuillez vérifier vos identifiants et réessayer.');
            });
        }
    };
    return (
        <View backgroundColor="#F5F5F5">
            <ContainerStyled>
                <TextTitleStyled>Connexion</TextTitleStyled>
                <BarStyle />
            </ContainerStyled>
            <ContainerBisStyled>
                <TextInputCustom value={inputs.email} placeholder="Entrez votre email" onChangeText={text => setInputs({...inputs, email: text})} secureTextEntry={false} />
                <TextInputCustom value={inputs.password} placeholder="Entrez votre mot de passe" onChangeText={text => setInputs({...inputs, password: text})} secureTextEntry={true}/>
                <Button title={'SE CONNECTER'} onPress={handleLogin} color={'white'} backgroundColor={'rgb(36,113,30)'}/>
                <TextStyled>Vous avez pas de compte ?</TextStyled>
                <Button title={'INSCRIPTION'} onPress={() => navigation.navigate('Register')} color={'rgb(36,113,30)'} backgroundColor={'#F5F5F5'}/>
            </ContainerBisStyled>
            <StatusBar barStyle="light-content" backgroundColor="rgb(36,113,30)"/>
        </View>
    );
};

export default Login;
