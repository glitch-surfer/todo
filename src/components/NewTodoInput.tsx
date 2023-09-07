import { useState } from 'react';
import { type Todo, type NewTodoInputProps } from '../types';

export const NewTodoInput = ({ setTodosList, setFilter }: NewTodoInputProps) => {
  const [description, setDescription] = useState<string>('');

  const newTodoHandler = () => {
    setTodosList(
      (todosList) => [...todosList, { description, completed: false, id: Date.now() }] as Todo[]
    );
    setDescription('');
    setFilter('All');
  };

  return (
    <div className="relative">
      <input
        className="border-b w-full border-cyan-500 bg-slate-50 p-2 placeholder:italic placeholder:text-gray-300 placeholder:text-center"
        type="text"
        placeholder="What needs to be done?"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button
        className="absolute right-1 top-1 text-gray-400 bg-slate-50 p-1 hover:text-gray-600"
        onClick={() => {
          newTodoHandler();
        }}
      >
        Add
      </button>
    </div>
  );
};
