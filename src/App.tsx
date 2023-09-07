import { useState } from 'react';
import { TodoList } from './components/TodoList';
import type { Filter, Todo } from './types';
import { NewTodoInput } from './components/NewTodoInput';
import { Controls } from './components/Controls';
import { getTodoList } from './components/util';

export const App = () => {
  const [todosList, setTodosList] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<Filter>('All');
  const notCompletedTodos = todosList.filter((todo) => !todo.completed);

  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-slate-100">
      <h1 className="text-3xl text-cyan-500 text-center">Todos</h1>
      <div className="flex flex-col w-[90%] sm:w-[35rem] bg-slate-50 shadow-md border border-cyan-500 text-cyan-800">
        <NewTodoInput setTodosList={setTodosList} setFilter={setFilter} />
        <TodoList
          todosList={getTodoList(todosList, filter)}
          setTodosList={setTodosList}
        />
        <Controls notCompletedTodos={notCompletedTodos} setTodosList={setTodosList} setFilter={setFilter} filter={filter} />
      </div>
    </main>
  );
};
