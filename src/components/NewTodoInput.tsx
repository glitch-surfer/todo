import { useState } from 'react';
import { type NewTodoInputProps } from '../types';

export const NewTodoInput = ({ setTodosList, todosList }: NewTodoInputProps) => {
  const [description, setDescription] = useState<string>('');

  const newTodoHandler = () => {
    setTodosList([...todosList, { description, completed: false }]);
    setDescription('');
  };

  return (
    <div>
      <input
        className="border rounded w-[10rem]"
        type="text"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button
        onClick={() => {
          newTodoHandler();
        }}
      >
        Add
      </button>
    </div>
  );
};
