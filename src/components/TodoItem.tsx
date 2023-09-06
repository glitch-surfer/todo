import type { TodoItemProps } from '../types';

export const TodoItem = ({ description, completed, setTodosList, id }: TodoItemProps) => {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => {
            setTodosList((prev) => {
              return prev.map((todo) => {
                if (todo.id === id) {
                  return {
                    ...todo,
                    completed: !todo.completed
                  };
                }
                return todo;
              });
            });
          }}
        />
        {description}
      </label>
    </li>
  );
};
