import * as React from 'react';
import { useQuery } from '@apollo/client';
import { CHARACTER_INFO } from '../graphQl'
import CharacterDetials from '../components/CharacterDetials';


const CharacterDetialsScreen = (props: any) => {
  const id = props.route.params?.id ?? '1';
  const { data } = useQuery(CHARACTER_INFO, {
    variables: {
      id: id,
    },
  });

  React.useEffect(() => {
    props.navigation.setOptions({
      title: data && data.character ? data.character.name: "Details"
    });
  }, [data]);

  return (
    <CharacterDetials character={data ? data.character: null}/>
  );
}

export default CharacterDetialsScreen;

