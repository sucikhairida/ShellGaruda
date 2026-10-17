// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ShellGaruda title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ShellGaruda/i);
    expect(titleElement).toBeInTheDocument();
});
