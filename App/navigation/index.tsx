import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import CharacterListScreen from '../screens/CharactersListScreen';
import CharacterDetailsScreen from '../screens/CharacterDetailsScreen';
import { RootStackParamList } from '../types';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="List">
      <Stack.Screen name="List" component={CharacterListScreen} options={{ title: 'Characters' }} />
      <Stack.Screen name="Details" component={CharacterDetailsScreen} />
    </Stack.Navigator>
  );
}
