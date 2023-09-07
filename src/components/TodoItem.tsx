import { type ChangeEvent, useState } from 'react';
import type { TodoItemProps } from '../types';

export const TodoItem = ({ description, completed, setTodosList, id }: TodoItemProps) => {
  const [editable, setEdditable] = useState<boolean>(false);

  const editTodoHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setTodosList((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            description: e.target.value
          };
        }
        return todo;
      });
    });
  };

  const saveTodoHandler = (): void => {
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
    setEdditable(false);
  };

  const removeTodoHandler = (): void => {
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
  };

  return (
    <li className="relative w-full border-b p-2 border-cyan-500 hover:bg-slate-100 group">
      <label
        className={`${
          completed ? 'line-through text-gray-400' : ''
        } flex items-center gap-2 cursor-pointer overflow-auto`}
      >
        {editable
          ? (
          <>
            <input
              type="text"
              className="w-full bg-slate-50 no-underline"
              value={description}
              onChange={editTodoHandler}
            />
            <button
              className="absolute right-1 top-1 text-gray-400 bg-slate-50 p-1 hover:text-gray-600 group-hover:bg-slate-100 disabled:text-gray-200"
              onClick={saveTodoHandler}
            >
              Save
            </button>
          </>
            )
          : (
          <>
            <input
              className="cursor-pointer"
              type="checkbox"
              checked={completed}
              onChange={removeTodoHandler}
            />
            {description}
            <button
              className="absolute right-1 top-1 text-gray-400 bg-slate-50 p-1 hover:text-gray-600 group-hover:bg-slate-100 disabled:text-gray-200"
              onClick={() => {
                setEdditable(true);
              }}
            >
              Edit
            </button>
          </>
            )}
      </label>
    </li>
  );
};
