import React from  'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import FindPets from '../screens/findpets/findpets.js';
import Menu from '../screens/menu/menu.js';
import Chat from '../screens/chat/chat.js';

const BottomStack = createBottomTabNavigator();

const BottomEndpoints = () => {
  return (
    <BottomStack.Navigator
      initialRouteName="FindPets"
      screenOptions={
        ({route}) => ({
          tabBarActiveTintColor: 'rgb(36,113,30)',
          tabBarLabelStyle: {fontSize: 12,fontFamily: 'Roboto'},
          tabBarStyle: {height: 50, borderTopColor: 'rgb(36,113,30)', borderTopWidth: 1},
          tabBarIcon: ({focused, color, size, iconName}) => {
            if (route.name === 'FindPets') {
              iconName = focused ? 'paw-outline' : 'paw-outline';
            } else if (route.name === 'Chat') {
              iconName = focused ? 'chatbubble-ellipses-outline' : 'chatbubble-ellipses-outline';
            } else if (route.name === 'Menu') {
              iconName = focused ? 'menu-outline' : 'menu-outline';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
        })
      }
      shifting={true}
    >
      <BottomStack.Screen name="Menu" component={Menu} options={{
          headerTitleStyle:{fontSize: 20, fontFamily: 'Roboto', fontWeight: 'bold',letterSpacing: 1.5},
          headerTintColor:'rgb(36,113,30)',
          headerStyle:{borderBottomColor:'rgb(36,113,30)', borderBottomWidth:1},
        }}
      />
      <BottomStack.Screen name="FindPets" component={FindPets} options={{
          headerTitleStyle:{fontSize: 20, fontFamily: 'Roboto', fontWeight: 'bold',letterSpacing: 1.5},
          headerTintColor:'rgb(36,113,30)',
          headerStyle:{borderBottomColor:'rgb(36,113,30)', borderBottomWidth:1},
        }}
      />
      <BottomStack.Screen name="Chat" component={Chat} options={{
          headerTitleStyle:{fontSize: 20, fontFamily: 'Roboto', fontWeight: 'bold',letterSpacing: 1.5},
          headerTintColor:'rgb(36,113,30)',
          headerStyle:{borderBottomColor:'rgb(36,113,30)', borderBottomWidth:1},
          tabBarBadge: 3,
        }}
      />
    </BottomStack.Navigator>
  );
};

export default BottomEndpoints;
