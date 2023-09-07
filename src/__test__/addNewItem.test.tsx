import { fireEvent, render, screen } from '@testing-library/react';
import { App } from '../App';

it('should add a new item correctly', () => {
  render(<App />);

  const inputElement = screen.getByPlaceholderText('What needs to be done?');
  fireEvent.change(inputElement, { target: { value: 'New Todo' } });

  const addButton = screen.getByText('Add');
  fireEvent.click(addButton);

  const todoList = screen.queryByRole('list');

  expect(todoList).toHaveTextContent('New Todo');
});
