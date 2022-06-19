import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from './Button';


describe('Button', () => {
    it('render component', () => {
        render(<Button />);
    });
    it('render with snapshot', () => {
        const { asFragment } = render(<Button />);
        expect(asFragment()).toMatchSnapshot();
    });
});