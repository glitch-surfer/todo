import { type Filter, type Todo } from '../types';

export const getTodoList = (todoList: Todo[], filter: Filter): Todo[] => {
  switch (filter) {
    case 'All':
      return todoList;
    case 'Active':
      return todoList.filter((todo) => !todo.completed);
    case 'Completed':
      return todoList.filter((todo) => todo.completed);
    default: return todoList;
  }
};
