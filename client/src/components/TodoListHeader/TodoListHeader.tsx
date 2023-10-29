import { Button, Input } from 'antd'

const { Search } = Input

interface TodoListHeaderProps {
  onClick: () => void
  search: {
    value: string
    onSearch: (value: string) => void
  }
}

export const TodoListHeader: React.FC<TodoListHeaderProps> = ({ onClick, search }) => {
  const { value, onSearch } = search

  return (
    <div className='flex justify-between items-center'>
      <div className='text-lg font-bold'>Todos</div>
      <div className='flex space-x-3 justify-end w-1/3'>
        <Search defaultValue={value} onSearch={onSearch} />
        <Button className='font-semibold' onClick={onClick}>
          Add Todo
        </Button>
      </div>
    </div>
  )
}
