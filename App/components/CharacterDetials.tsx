import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import EpisodesList from './common/EpisodesList';

const CharacterDetails = (props: any) => {
  return (
    <React.Fragment>
      {props.character
        ? <React.Fragment><View style={styles.contentContainer}>
          <Image style={styles.Image} source={{ uri: props.character.image }} />
          <View>
            <View><Text>Name: {props.character.name}</Text></View>
            <View><Text>Species: {props.character.species}</Text></View>
            <View><Text>Gender: {props.character.gender}</Text></View>
          </View>
        </View>
          <EpisodesList episodes={props.character.episode} />
        </React.Fragment>
        : <React.Fragment />
      }
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    padding: 10,
    flexDirection: 'row',
    alignContent: 'space-between'
  },
  Image: {
    width: 100,
    height: 80,
    resizeMode: 'contain'
  },
});

export default CharacterDetails
