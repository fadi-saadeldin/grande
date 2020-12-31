import React from 'react';
import { render } from '@testing-library/react-native';

import SearchTextInput from '../SearchTextInput';

describe('<SearchTextInput />', () => {
  it('renders <SearchTextInput /> component', () => {
    const { getByTestId } = render(<SearchTextInput />);
    expect(getByTestId('container')).toBeDefined();    
  });
});