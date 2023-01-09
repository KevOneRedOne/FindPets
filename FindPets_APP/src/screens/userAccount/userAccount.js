import React, {useEffect} from 'react';
import {View, Text, ActivityIndicator } from 'react-native';
import axios from 'axios';
import {API_URL} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AvatarThumbnail from './../../components/avatarThumbnail/thumbnail';
import {StyledViewContainer, StyledTextTitle, StyledViewDiv, StyledSubTitle} from './../../assets/styles/userAccount.styles';

const UserAccount = () => {
  const [user, setDataUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  const getAllFromUser = async () => {
    const token = await AsyncStorage.getItem('token');
    axios({
      method: 'get',
      url: `${API_URL}/user/user`,
      headers: {
        Authorization: `${token}`,
      },
    })
      .then(response => {
        setDataUser(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  };
  useEffect(() => {
    getAllFromUser();
  }, []);

  if (loading) {
    return (
      <View>
        <ActivityIndicator size= {'large'} />
      </View>
    );
  } else {
    return (
      <StyledViewContainer>
        <StyledViewDiv>
          <AvatarThumbnail />
          <StyledTextTitle>{user.lastname} {user.firstname}</StyledTextTitle>
        </StyledViewDiv>
        <View>
          <StyledSubTitle>A Propos : </StyledSubTitle>
        </View>
        <StyledViewDiv>
          <Text>Email : {user.email}</Text>
          <Text>Adresse : {user.address ? user.address : "Pas d'adresse de rensigner"}</Text>
          <Text>Tel : {user.phone ? user.phone : 'Pas de Téléphone de renseigner'}</Text>
        </StyledViewDiv>
        <View>
          <StyledSubTitle>Description : </StyledSubTitle>
          <Text>{user.description ? user.description : 'Pas de Description'}</Text>
          <Text/>
        </View>
        <View>
          <StyledSubTitle>Animaux/Enfants : </StyledSubTitle>
          <Text>Animaux : {user.pets ? user.pets : 0} chat</Text>
          <Text>Enfants : {user.children ? user.children : 0} enfant</Text>
          <Text/>
        </View>
        <View>
        <StyledSubTitle>Maison/Appartement : </StyledSubTitle>
          <Text>Appartement : {user.appartment ? user.appartment : "Pas d'appartement"}</Text>
          <Text>Maison : {user.house ? user.house : 'Pas de maison'}</Text>
        </View>
      </StyledViewContainer>
    );
  }
};

export default UserAccount;
