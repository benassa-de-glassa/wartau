import React from 'react';
import { render } from '@testing-library/react';

import Card from './card';

describe('Card', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Card number={'1'} color={'white'} id={1} />
    );
    expect(baseElement).toBeTruthy();
  });
});