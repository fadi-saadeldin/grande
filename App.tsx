import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ApolloProvider } from '@apollo/client';
import { client } from './App/services/apollo';
import Navigation from './App/navigation';

export default function App () {
    return (
      <SafeAreaProvider>
        <ApolloProvider client={client}>
          <Navigation />
          <StatusBar />
        </ApolloProvider> 
      </SafeAreaProvider>
    );
}
