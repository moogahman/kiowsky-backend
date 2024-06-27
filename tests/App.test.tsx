import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import App from '../src/App';

describe('App component', () => {
    it('renders Kiowsky as text', () => {
        render(<App />);

        const linkElement = screen.getByText(/Kiowsky/i);
        expect(linkElement).toBeInTheDocument();
    });
});
