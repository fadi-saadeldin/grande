import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import CharacterListScreen from '../screens/CharactersListScreen';
import CharacterDetailsScreen from '../screens/CharacterDetailsScreen';
import { RootStackParamList } from '../types';

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}


const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="List">
      <Stack.Screen name="List" component={CharacterListScreen} options={{ title: 'Characters' }} />
      <Stack.Screen name="Details" component={CharacterDetailsScreen} />
    </Stack.Navigator>
  );
}
