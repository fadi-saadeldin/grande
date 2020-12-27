import React from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AutoComplete = (props: any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onClearText} style={styles.closeIcon}><Ionicons name="ios-close" size={25} color="#D6D6D6" /></TouchableOpacity>
      <TextInput
        autoCompleteType={'off'}
        autoCorrect={false}
        style={styles.autocompleteStyle}
        returnKeyType="search"
        value={props.value}
        underlineColorAndroid="transparent"
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
      />
      <Ionicons style={styles.searchIcon} name="md-search" size={25} color="#D6D6D6" />
    </View>
  )
}
const styles = StyleSheet.create({
  searchIcon: {
    left: 15,
    top: 15,
    position: 'absolute',
    zIndex: 9999
  },
  closeIcon:{
    right: -15,
    position: 'absolute',
    top: 15,
    width: 50,
    zIndex: 1
  },
  autocompleteStyle: {
    height: 50,
    borderRadius: 4,
    padding: 10,
    paddingTop: 13,
    paddingLeft: 45,
    right: 0,
    left: 0,
    backgroundColor: "#fff",
  },
  container: {
    borderRadius: 4,
    borderWidth: 1,
    margin: 10,
    borderColor: '#ddd'
  }
});
export default AutoComplete