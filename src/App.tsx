import { useState } from 'react';
import { TodoList } from './components/TodoList';
import type { Todo } from './types';
import { NewTodoInput } from './components/NewTodoInput';

export const App = () => {
  const [todosList, setTodosList] = useState<Todo[]>([]);
  const notCompletedTodos = todosList.filter((todo) => !todo.completed);

  const clearCompletedTodosHandler = () => {
    setTodosList((prev) => prev.filter((todo) => !todo.completed));
  };

  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-slate-100">
      <h1 className="text-3xl text-cyan-500 text-center">Todos</h1>
      <div className="flex flex-col bg-slate-50 shadow-md border border-cyan-500 text-cyan-800">
        <NewTodoInput setTodosList={setTodosList} />
        <TodoList
          todosList={todosList}
          setTodosList={setTodosList}
        />
        <div className="flex justify-between p-2 items-center">
          <p className="text-gray-400 text-sm">{notCompletedTodos.length} items left</p>
          <button
            className="text-gray-400 hover:text-gray-600"
            onClick={clearCompletedTodosHandler}
          >
            Clear Completed
          </button>
        </div>
      </div>
    </main>
  );
};
