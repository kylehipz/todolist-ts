import { List, Avatar, Checkbox, Tooltip } from 'antd'
import { CheckboxChangeEvent } from 'antd/es/checkbox'
import { EditButton, DeleteButton } from './ItemActions'
import { TodoListItemContent } from './ItemContent'
// * Hooks
import { useTodoMutations } from '@hooks'

interface Props {
  item: Todo
  onEditClick: (todo: Todo) => void
  onDeleteConfirm: (id: string) => void
}

export const TodoListItem: React.FC<Props> = ({ item, onDeleteConfirm, onEditClick }) => {
  const { editTodo } = useTodoMutations(item.id)

  const onChange = async (e: CheckboxChangeEvent) => {
    const isChecked = e.target.checked

    await editTodo({ ...item, completed: isChecked })
  }

  return (
    <div className='flex items-center pl-5'>
      <Checkbox defaultChecked={item.completed} onChange={onChange} />
      <List.Item
        className='w-full'
        actions={[
          <EditButton key='edit' onClick={() => { onEditClick(item) }} />,
          <DeleteButton key='delete' onDeleteConfirm={() => { onDeleteConfirm(item.id as string) }} />
        ]}
      >
        <List.Item.Meta
          avatar={
            <Tooltip title={item.created_by.email}>
              <Avatar src={item.created_by.picture} />
            </Tooltip>
          }
          title={<span className='font-bold'>{item.created_by.name}</span>}
          description={<TodoListItemContent item={item} />}
        />
      </List.Item>
    </div>
  )
}
