import { List } from 'antd'
import { TodoListItem } from '../TodoListItem'

interface TodoListProps {
  onEditClick: (todo: Todo) => void
  onDeleteConfirm: (id: string) => void
  list: {
    todos: Todo[]
    isLoading: boolean
  }
}

export const TodoList: React.FC<TodoListProps> = ({
  onEditClick,
  onDeleteConfirm,
  list
}) => {
  return (
    <List
      loading={list.isLoading}
      itemLayout='horizontal'
      dataSource={list.todos}
      renderItem={(item) => (
        <TodoListItem
          item={item}
          onEditClick={onEditClick}
          onDeleteConfirm={onDeleteConfirm}
        />
      )}
      bordered
      className='overflow-auto h-[60vh]'
    />
  )
}
