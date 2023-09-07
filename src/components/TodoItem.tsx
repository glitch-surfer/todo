import type { TodoItemProps } from '../types';

export const TodoItem = ({ description, completed, setTodosList, id }: TodoItemProps) => {
  return (
    <li className="w-[20rem] sm:w-[30rem] border-b p-2 border-cyan-500 hover:bg-slate-100">
      <label
        className={`${
          completed ? 'line-through text-gray-400' : ''
        } flex items-center gap-2 cursor-pointer overflow-auto`}
      >
        <input
          className="cursor-pointer"
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
