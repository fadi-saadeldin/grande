import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text } from 'react-native';


const CharacterCard = (props: any) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onShowDetails}>
      <View style={styles.contentContainer}>
        <View><Text >{props.character.name}</Text></View>
        <View><Image style={styles.Image} source={{ uri: props.character.image }} /></View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1
  },
  contentContainer: {
    padding: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 1
  },
  Image: {
    width: 100,
    height: 80,
    resizeMode: 'contain'
  },
});

export default CharacterCard;