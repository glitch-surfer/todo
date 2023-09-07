import { useState } from 'react';
import { TodoList } from './components/TodoList';
import type { Todo } from './types';
import { NewTodoInput } from './components/NewTodoInput';

export const App = () => {
  const [todosList, setTodosList] = useState<Todo[]>([]);
  const notCompletedTodos = todosList.filter((todo) => !todo.completed);
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl text-cyan-500 text-center">Todo</h1>
      <NewTodoInput
        setTodosList={setTodosList}
      />
      <TodoList todosList={todosList} setTodosList={setTodosList} />
      <p>{notCompletedTodos.length} items left</p>
    </main>
  );
};
