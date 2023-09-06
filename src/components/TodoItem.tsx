import type { Todo } from '../types';

export const TodoItem = ({ description, completed }: Todo) => {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
        />
        {description}
      </label>
    </li>
  );
};
