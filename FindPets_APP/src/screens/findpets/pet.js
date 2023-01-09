// import axios from 'axios';
import React from 'react';
import { View, Text } from 'react-native';

const Pet = (petId) => {
    console.log('Le contenu de Id : ', petId); // data[0].name is undefined);
    // axios({

    // })

    return (
        <View style={{ marginTop: 100, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Card 1</Text>
        {/* <Text>{data.data[0].name}</Text> */}
        </View>
    );

};

export default Pet;
