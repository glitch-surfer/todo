import { fireEvent, render, screen } from '@testing-library/react';
import { App } from '../App';
describe('clear completed todos', () => {
  const todos = ['test todo 1', 'test todo 2', 'test todo 3'];

  it('should not remove active todos', () => {
    render(<App />);
    const addButton = screen.getByText('Add');

    todos.forEach((description) => {
      const inputElement = screen.getByPlaceholderText('What needs to be done?');
      fireEvent.change(inputElement, { target: { value: description } });
      fireEvent.click(addButton);
    });

    const clearBtn = screen.getByText('Clear Completed');
    fireEvent.click(clearBtn);

    const todoList = screen.queryByRole('list');

    expect(todoList).toHaveTextContent(todos.join(''));
  });

  it('should remove completed todos', () => {
    render(<App />);
    const addButton = screen.getByText('Add');

    todos.forEach((description) => {
      const inputElement = screen.getByPlaceholderText('What needs to be done?');
      fireEvent.change(inputElement, { target: { value: description } });
      fireEvent.click(addButton);
    });

    const completedTodo = screen.getByText('test todo 3');
    fireEvent.click(completedTodo);

    const clearBtn = screen.getByText('Clear Completed');
    fireEvent.click(clearBtn);

    const todoList = screen.queryByRole('list');

    const activeTodos = todos.slice(0, 2);
    expect(todoList).toHaveTextContent(activeTodos.join(''));
  });
});
