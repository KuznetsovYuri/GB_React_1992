import React from 'react';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom';

import RenderChatslist  from './ChatList';

describe('ChatList', () => {
  it('render component', () => {
    render(<RenderChatslist />);

  });
});