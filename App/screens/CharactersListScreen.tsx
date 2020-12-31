import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { CHARACTERS } from '../graphQl'
import CharactersListScreen from '../components/CharactersList';

interface IFilter {
  name: string,
}
const CharactersList = (props: any) => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState<IFilter>({ name : ''})
  const { loading, data, refetch } = useQuery(CHARACTERS, {
    variables: {
      page: page,
      filter: filter
    },
  });

  const handleLoadMore = () => {
    setPage(page + 1)
  }

  const onSearch = (name: string) => {
    const newFilter: IFilter = { name };
    setFilter(newFilter)
  }

  const onShowDetails = (id: Number) => {
    props.navigation.navigate('Details', { id})
  }

  const onRefetch = () => {
    refetch()
    setPage(1)
  }

  return (
    <CharactersListScreen
      handleLoadMore={handleLoadMore}
      onSearch={onSearch}
      loading={loading}
      onShowDetails={onShowDetails}
      onRefetch={onRefetch}
      characters={data ? data.characters.results : []}
      filter={filter}
    />
  );
}

export default CharactersList;
