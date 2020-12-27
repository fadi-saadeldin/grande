import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AutoComplete = (props: any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onClearText} style={styles.closeIcon}><Ionicons name="ios-close" size={35} color="#D6D6D6" /></TouchableOpacity>
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
      <Ionicons style={styles.closeIcon} name="md-search" size={35} color="#D6D6D6" />

    </View>
  )
}
const styles = StyleSheet.create({
  searchIcon: {
    width: 20,
    height: 20,
    left: 15,
    top: 15,
    position: 'absolute',
    alignSelf: 'flex-start',
    zIndex: 9999
  },
  closeIcon:{
    right: -15,
    position: 'absolute',
    top: 7,
    alignSelf: 'center',
    width: 50,
    zIndex: 10000000
  },
  autocompleteStyle: {
    zIndex: 9999,
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
    width: "100%",
    borderRadius: 4,
    borderWidth:1,
    backgroundColor: '#fff',
  }
});
export default AutoComplete