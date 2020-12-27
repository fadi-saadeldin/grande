import { gql } from '@apollo/client';
 

const characterFields = `{
  id
  name
  status
  species
  type
  gender
  image
  episode{
    name
    air_date
  }
}
`;
  
export const CHARACTERS = gql`
  query($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      results {
        id
        name
        image
     }
    }
  }
`;

export const CHARACTER_INFO = gql`
  query($id: ID!) {
    character(id: $id) ${characterFields}
    }
`;