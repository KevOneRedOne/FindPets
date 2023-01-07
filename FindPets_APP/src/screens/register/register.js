/* eslint-disable no-useless-escape */
/* eslint-disable no-alert */
import React, { useEffect } from 'react';
import axios from 'axios';
import { View, StatusBar, TouchableOpacity} from 'react-native';
import { ContainerStyled, TextTitleStyled, BarStyle, ContainerBisStyled, TextStyled, TextLinkStyled } from '../../assets/styles/register.styles';
import { API_URL } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../../components/Button_Login/button';
import TextInputCustom from '../../components/Text_Input/textInputCustom';

const Register = ({navigation}) => {
    const [inputs, setInputs] = React.useState({
        firstname: '', lastname: '', email: '', password: '', repeatPassword: '',
    });

    useEffect(() => {
        AsyncStorage.getItem('token').then(token => {
            if (token) {
                navigation.navigate('Home');
            }
        });
    });

    const handleRegister = async () => {
        const checkEmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const checkPasswordRegex = /^.*(?=.{6,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%&? "]).*$/;
        const checkPasswordLength = 8;
        const checkFirstLastnameRegex = /^[a-zA-ZÀ-ÿ]+$/;

        if (inputs.firstname === '' || inputs.lastname === '' || inputs.email === '' || inputs.password === '' || inputs.repeatPassword === '') {
            alert('Veuillez remplir tous les champs');
        } else if (!inputs.email.toLowerCase().match(checkEmailRegex)) {
            alert('Email non valide !\n\nVeuillez renseigner un email valide (exemple@exemple.fr).');
        } else if (!inputs.password.match(checkPasswordRegex)) {
            alert('Mot de passe non valide !\n\nVeuillez renseigner un mot de passe contenant au moins une majuscule, une minuscule, un chiffre et un caractère spécial.');
        } else if (inputs.password.length < checkPasswordLength) {
            alert('Mot de passe trop court !\n\nVeuillez renseigner un mot de passe d\'au moins 8 caractères.');
        } else if (inputs.password !== inputs.repeatPassword) {
            alert('Les mots de passe ne correspondent pas. Veuillez réessayer.');
        } else if (!checkFirstLastnameRegex.test(inputs.firstname) || !checkFirstLastnameRegex.test(inputs.lastname)) {
            alert('Veuillez entrer un prénom et un nom valide');
        } else {
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
                if (response.data.message === 'User registered successfully') {
                    alert('Inscription réussie !');
                    navigation.navigate('Login');
                } else {
                    alert('Une erreur est survenue, veuillez réessayer.');
                }
            })
            .catch(error => {
                console.log('Error with the Api', error);
                alert('Cette adresse mail est déjà utilisée, veuillez réessayer.');
            });
        }
    };

    return (
        <View backgroundColor="#F5F5F5">
            <ContainerStyled>
                <TextTitleStyled>Inscription</TextTitleStyled>
                <BarStyle />
            </ContainerStyled>
            <ContainerBisStyled>
                <TextInputCustom value={inputs.firstname} placeholder={'Entrez votre prénom'} onChangeText={text => setInputs({...inputs, firstname: text})}/>
                <TextInputCustom value={inputs.lastname} placeholder={'Entrez votre nom'} onChangeText={text => setInputs({...inputs, lastname: text})}/>
                <TextInputCustom value={inputs.email} placeholder={'Entrez votre email'} onChangeText={text => setInputs({...inputs, email: text})}/>
                <TextInputCustom value={inputs.password} placeholder={'Saisissez un mot de passe'} onChangeText={text => setInputs({...inputs, password: text})} secureTextEntry={false}/>
                <TextInputCustom value={inputs.repeatPassword} placeholder={'Confirmez votre mot de passe'} onChangeText={text => setInputs({...inputs, repeatPassword: text})} secureTextEntry={false}/>
                <Button title="S'INSCRIRE" onPress={handleRegister} color="white"/>
                <TextStyled>Vous avez déjà un compte ?</TextStyled>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}><TextLinkStyled>Se Connecter</TextLinkStyled></TouchableOpacity>
            </ContainerBisStyled>
            <StatusBar barStyle="light-content" backgroundColor="rgb(36,113,30)"/>
        </View>
    );
};


export default Register;
