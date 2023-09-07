import { getTodoList } from '../components/util';

describe('getTodoList', () => {
  const todoList = [
    { id: 1, description: 'Todo 1', completed: false },
    { id: 2, description: 'Todo 2', completed: true },
    { id: 3, description: 'Todo 3', completed: false }
  ];

  it('should return the original todoList when the filter is "All"', () => {
    const filter = 'All';
    const result = getTodoList(todoList, filter);
    expect(result).toEqual(todoList);
  });

  it('should return the active todos when the filter is "Active"', () => {
    const filter = 'Active';
    const expected = [todoList[0], todoList[2]];
    const result = getTodoList(todoList, filter);
    expect(result).toEqual(expected);
  });

  it('should return the completed todos when the filter is "Completed"', () => {
    const filter = 'Completed';
    const expected = [todoList[1]];
    const result = getTodoList(todoList, filter);
    expect(result).toEqual(expected);
  });
});
