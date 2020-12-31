import React from 'react';
import { render } from '@testing-library/react-native';

import CharactersList from '../CharactersList';
const initialProps = {
  filter: { 'name': 'Mocky' }
};
test('examples of some things', async () => {
    const { getByTestId } = render(<CharactersList {...initialProps} />)
    expect(getByTestId('flat-list')).toBeTruthy()
});