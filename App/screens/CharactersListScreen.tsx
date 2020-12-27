import * as React from 'react';
import { StyleSheet } from 'react-native';
import { useQuery, gql } from '@apollo/client';
import { CHARACTERS } from '../graphQl'
import CharactersListScreen from '../components/CharactersList';

const CharactersList = (props: any) => {
  const { loading, data } = useQuery(CHARACTERS);
  if (loading) return <p>Loading...</p>;

  return (
    <CharactersListScreen characters={data ? data.characters: []}/>
  );
}

export default CharactersList;
