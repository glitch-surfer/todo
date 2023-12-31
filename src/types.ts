import { type Dispatch, type SetStateAction } from 'react';

export interface TodoContainerProps {
  todosList: Todo[]
  setTodosList: Dispatch<SetStateAction<Todo[]>>
}

export interface Todo {
  id: number
  description: string
  completed: boolean
}

export interface TodoItemProps extends Todo {
  setTodosList: Dispatch<SetStateAction<Todo[]>>
}

export interface NewTodoInputProps {
  setTodosList: Dispatch<SetStateAction<Todo[]>>
  setFilter: Dispatch<SetStateAction<Filter>>
}

export interface ControlsProps {
  notCompletedTodos: Todo[]
  setTodosList: Dispatch<SetStateAction<Todo[]>>
  filter: Filter
  setFilter: Dispatch<SetStateAction<Filter>>
}
export type Filter = 'All' | 'Active' | 'Completed';

export interface FilterProps {
  selectedFilter: Filter
  setFilter: Dispatch<SetStateAction<Filter>>
}
