import React from 'react';
import { render, screen } from '@testing-library/react';
import { fireEvent, waitFor } from '@testing-library/dom';
import { ChatWindow } from './ChatWindow';
import '@testing-library/jest-dom';

describe('MessageList', () => {
    it('render component', () => {
        render(<ChatWindow />);
    });
    it('response of Bot', async () => {
        render(<ChatWindow />);
        fireEvent.input(screen.getByPlaceholderText('Text your message'), {
            target: { value: 'TestMessage' },
        });
        fireEvent.click(screen.getByTestId('submitbutton'));

        await waitFor(
            () =>
                expect(
                    screen.getByText("I'm bot")
                ).toBeInTheDocument(),
            { timeout: 1200 }
        );
    });
});