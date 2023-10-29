import moment from 'moment'

export const TodoListItemContent: React.FC<{ item: Todo }> = ({ item }) => {
  const { content, due_date, completed } = item

  const className = completed ? 'line-through' : ''

  return (
    <div>
      <div className={className}>Task: {content}</div>
      <div className={className}>Due date: {moment(due_date).format('MMM Do YYYY')}</div>
    </div>
  )
}
