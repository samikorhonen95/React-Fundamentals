import { fireEvent, render, screen } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';
import App from './App';

expect.extend(matchers);

test('add & clear todo', () => {
    render(<App/>);

    const desc = screen.getByPlaceholderText('Description');
    fireEvent.change(desc, {target: {value: 'Go to coffee'}});
    const date = screen.getByPlaceholderText('Date');
    fireEvent.change(date, { target: { value: '29.12.2023' } });
    const status = screen.getByPlaceholderText('Status');
    fireEvent.change(status, { target: { value: 'Open' } });
    const button = screen.getByText('Add');
    fireEvent.click(button);

    const table = screen.getByRole('table');
    expect(table).toHaveTextContent(/Go to coffee/i);

    const clearButton = screen.getByText('Clear todo');
    fireEvent.click(clearButton);
    expect(table).not.toHaveTextContent(/Go to coffee/i);
});