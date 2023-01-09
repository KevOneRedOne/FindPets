import React, {useEffect} from 'react';
import {View, Text, ActivityIndicator } from 'react-native';
import axios from 'axios';
import {API_URL} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AvatarThumbnail from './../../components/avatarThumbnail/thumbnail';

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
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <AvatarThumbnail />
        <Text>{user.email}</Text>
        <Text>{user.username ? user.username : 'Pas de Surnom'}</Text>
        <Text>{user.firstname}</Text>
        <Text>{user.lastname}</Text>
      </View>
    );
  }
};

export default UserAccount;
