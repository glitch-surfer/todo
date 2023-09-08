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

  const completeTodoHandler = (): void => {
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
    <li className="relative w-full border-b border-cyan-500 hover:bg-slate-100 group">
      <input
        className="cursor-pointer absolute left-2 top-[14px]"
        type="checkbox"
        checked={completed}
        onChange={completeTodoHandler}
      />
      <input
        type="text"
        className={`w-full bg-slate-50  p-2 pl-8 group-hover:bg-slate-100 ${
          completed ? 'line-through text-gray-400' : ''
        } ${editable ? 'bg-cyan-50 group-hover:bg-cyan-50' : ''}`}
        value={description}
        onChange={editTodoHandler}
        disabled={!editable}
      />
      <button
        className={`absolute right-1 top-1 text-gray-400 bg-slate-50 p-1 hover:text-gray-600 group-hover:bg-slate-100 ${
          editable ? 'bg-cyan-50 group-hover:bg-cyan-50' : ''
        }`}
        onClick={
          editable
            ? () => {
                setEdditable(false);
              }
            : () => {
                setEdditable(true);
              }
        }
      >
        {editable ? 'Save' : 'Edit'}
      </button>
    </li>
  );
};
