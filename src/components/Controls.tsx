import { type FilterProps, type ControlsProps, type Filter } from '../types';

const FilterViewControls = ({ setFilter }: FilterProps) => {
  const filters: Filter[] = ['All', 'Active', 'Completed'];
  return (
    <div className="flex gap-2">
      {filters.map((filter) => (
        <button
          key={filter}
          className="text-gray-400 hover:text-gray-600 text-sm"
          onClick={() => {
            setFilter(filter);
          }}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export const Controls = ({ notCompletedTodos, setTodosList, setFilter }: ControlsProps) => {
  const clearCompletedTodosHandler = () => {
    setTodosList((prev) => prev.filter((todo) => !todo.completed));
    setFilter('All');
  };

  return (
    <div className="flex flex-wrap justify-between p-2 items-center">
      <p className="text-gray-400 text-sm">{notCompletedTodos.length} items left</p>
      <FilterViewControls setFilter={setFilter} />
      <button
        className="text-gray-400 hover:text-gray-600 text-sm"
        onClick={clearCompletedTodosHandler}
      >
        Clear Completed
      </button>
    </div>
  );
};
