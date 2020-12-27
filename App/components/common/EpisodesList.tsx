import React from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';

const EpisodeCard = ({ episode }: any) => {
  return (
    <View style={styles.card}>
      <Text>{episode.name}</Text>
      <Text>{episode.air_date}</Text>
    </View>
  )
}

const CharacterCard = (props: any) => {
  return (
    <FlatList
      data={props.episodes}
      renderItem={({ item }) => (
        <EpisodeCard key={item.id} episode={item} />
      )}
      keyExtractor={item => item.id}
    />
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    justifyContent: 'space-between',
    flexDirection: 'row'
  }

});

export default CharacterCard;