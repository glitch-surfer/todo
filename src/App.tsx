import { useState } from 'react';
import { TodoList } from './components/TodoList';
import type { Todo } from './types';

export const App = () => {
  const [todosList, setTodosList] = useState<Todo[]>([]);
  return (
      <main className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-3xl text-cyan-500 text-center">Todo</h1>
        <TodoList todosList={todosList}/>
      </main>
  );
};
