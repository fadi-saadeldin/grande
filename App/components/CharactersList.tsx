import React from 'react';
import { StyleSheet, Text, FlatList } from 'react-native';
import CharacterCard from './common/CharacterCard'
import SearchTextInput from './common/SearchTextInput';
const CharactersList = (props: any) => {
  return (
    <React.Fragment>
      <SearchTextInput value={props.filter.name} onChangeText={props.onSearch} onClearText={()=>props.onSearch('')}/>
      <FlatList
        data={props.characters}
        renderItem={({ item }) => (
          <CharacterCard key={item.id} character={item} onPress={() => props.onShowDetails(item.id)} />
        )}
        keyExtractor={item => item.id}
        refreshing={props.loading}
        onRefresh={props.onRefetch}
        onEndReachedThreshold={0.1}
        onEndReached={() => {
            props.handleLoadMore()
        }}
      />
      
    </React.Fragment>
  );
}

export default CharactersList;