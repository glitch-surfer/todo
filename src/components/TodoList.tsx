import type { TodoContainerProps } from '../types';
import { TodoItem } from './TodoItem';

export const TodoList = ({ todosList, setTodosList }: TodoContainerProps) => {
  if (todosList.length === 0) {
    return (
      <p className="text-lg text-cyan-500 text-center border-b  border-cyan-500 p-2">
        No todos yet
      </p>
    );
  }

  return (
    <ul className="flex flex-col">
      {todosList.map((todo) => {
        const { description, completed, id } = todo;
        return (
          <TodoItem
            key={id}
            id={id}
            description={description}
            completed={completed}
            setTodosList={setTodosList}
          />
        );
      })}
    </ul>
  );
};
