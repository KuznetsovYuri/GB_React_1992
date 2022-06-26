import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from './Button';


describe('Button', () => {
    it('render component', () => {
        render(<Button label='test' />);
    });
    it('render with snapshot', () => {
        const { asFragment } = render(<Button label="test" />);
        expect(asFragment()).toMatchSnapshot();
    });
    it('button is disabled', () => {
        render(<Button label="test" disabled />);
        expect(screen.getByText(/test/)).toBeDisabled();
    });
});