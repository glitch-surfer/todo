import type { TodoContainerProps } from '../types';
import { TodoItem } from './TodoItem';

export const TodoList = ({ todosList }: TodoContainerProps) => {
  if (todosList.length === 0) {
    return <p className='text-lg text-cyan-500'>No todos yet</p>;
  }

  return (
    <ul className='flex flex-col border rounded bg-cyan-100'>
      {todosList.map((todo) => (
        <TodoItem
          key={todo.description}
          description={todo.description}
          completed={todo.completed}
        />
      ))}
    </ul>
  );
};