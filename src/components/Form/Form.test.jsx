import React from 'react';
import { render } from '@testing-library/react';
import { Form } from './Form';
import '@testing-library/jest-dom';

describe('Form', () => {
    it('render component', () => {
      const mockHandler = jest.fn();
      render(<Form addMessage={mockHandler} />);
    });
  });

