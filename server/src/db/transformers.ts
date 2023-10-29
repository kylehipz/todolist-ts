import moment from 'moment'

export const transformRemoteTodo = (remoteTodo: RemoteTodo): Todo => {
  return {
    id: remoteTodo.id,
    content: remoteTodo.content,
    completed: remoteTodo.completed,
    due_date: new Date(remoteTodo.due_date),
    created_by: {
      email: remoteTodo.created_by,
      name: remoteTodo.user_name,
      picture: remoteTodo.user_picture
    }
  }
}

export const transformTodo = (todo: Todo): RemoteTodo => {
  return {
    id: todo.id,
    content: todo.content,
    due_date: moment(todo.due_date).format(),
    completed: todo.completed,
    created_by: todo.created_by.email
  }
}
