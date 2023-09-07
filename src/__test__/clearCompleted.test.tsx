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

    const todoList = screen.getByRole('list');
    todos.forEach((description) => {
      const todo = screen.queryByText(description);
      expect(todoList).toContainElement(todo);
    });
  });

  it('should remove completed todos', () => {
    render(<App />);
    const addButton = screen.getByText('Add');

    todos.forEach((description) => {
      const inputElement = screen.getByPlaceholderText('What needs to be done?');
      fireEvent.change(inputElement, { target: { value: description } });
      fireEvent.click(addButton);
    });

    const completedTodo = screen.getByLabelText('test todo 3');
    fireEvent.click(completedTodo);

    const clearBtn = screen.getByText('Clear Completed');
    fireEvent.click(clearBtn);

    const removedTodo = screen.queryByText('test todo 3');
    expect(removedTodo).not.toBeInTheDocument();
  });
});
