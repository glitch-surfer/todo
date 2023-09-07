import { type ControlsProps } from '../types';

export const Controls = ({ notCompletedTodos, setTodosList }: ControlsProps) => {
  const clearCompletedTodosHandler = () => {
    setTodosList((prev) => prev.filter((todo) => !todo.completed));
  };

  return (
    <div className="flex justify-between p-2 items-center">
      <p className="text-gray-400 text-sm">{notCompletedTodos.length} items left</p>
      <button
        className="text-gray-400 hover:text-gray-600"
        onClick={clearCompletedTodosHandler}
      >
        Clear Completed
      </button>
    </div>
  );
};
