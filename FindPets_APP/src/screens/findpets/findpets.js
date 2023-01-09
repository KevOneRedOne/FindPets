/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import axios from 'axios';
import {Text, View, StatusBar, ActivityIndicator} from 'react-native';
import {API_URL} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Swipe from '../../components/Swipe/swipe';

const FindPets = () => {
  const [animalsList, setAnimalsList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const getAllAnimals = async () => {
    const token = await AsyncStorage.getItem('token');
    axios({
      method: 'get',
      url: `${API_URL}/animal/all`,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `${token}`,
      },
    })
      .then(response => {
        setAnimalsList([...animalsList, ...response.data]);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    getAllAnimals();
  }, []);

  if (loading) {
    return (
      <View>
        <ActivityIndicator size= {'large'} />
      </View>
    );
  } else if (!loading && animalsList.length === 0) {
    return (
      <View>
        <Text>No animals found</Text>
      </View>
    );
  } else {
    return (
      <View>
        <Swipe data={animalsList}/>
        <StatusBar barStyle="dark-content" backgroundColor={'white'} />
      </View>
    );
  }
};

export default FindPets;
