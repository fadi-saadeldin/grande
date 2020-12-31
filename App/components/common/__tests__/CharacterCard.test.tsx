import React from 'react';
import { render } from '@testing-library/react-native';

import CharacterCard from '../CharacterCard';
const initialProps = {
  character: { 'name': 'Mocky', image: '' }
};
describe('<CharactersListScreen />', () => {
  it('renders <CharactersListScreen /> component', () => {
    const { getByTestId } = render(<CharacterCard {...initialProps} />)
    expect(getByTestId('touchable-opacity')).toBeTruthy();
    expect(getByTestId('container')).toBeTruthy();
    expect(getByTestId('name')).toBeTruthy();
    expect(getByTestId('image')).toBeTruthy();
  });
});