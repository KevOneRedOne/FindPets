import React from 'react';
import { View, Text } from 'react-native';

const Pet = (petId) => {
    // console.log('Le contenu de data : ', data.data[0].name); // data[0].name is undefined);

    return (
        <View style={{ marginTop: 100, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Card 1</Text>
        {/* <Text>{data.data[0].name}</Text> */}
        </View>
    );

};

export default Pet;