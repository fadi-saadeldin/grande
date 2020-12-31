import React from 'react';
import { render } from '@testing-library/react-native';

import EpisodesList from '../EpisodesList';

const initialProps = {
  character: { 'name': 'Mocky', image: '' }
};
describe('<EpisodesList />', () => {
  it('renders <EpisodesList /> component', () => {
    const { getByTestId } = render(<EpisodesList {...initialProps} />);
    expect(getByTestId('flat-list')).toBeTruthy();
  });
});