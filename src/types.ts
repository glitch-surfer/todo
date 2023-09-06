export interface TodoContainerProps {
  todosList: Todo[]
}

export interface Todo {
  description: string
  completed: boolean
}

export interface NewTodoInputProps {
  todosList: Todo[]
  setTodosList: (todosList: Todo[]) => void
}
