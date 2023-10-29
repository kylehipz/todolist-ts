import { TodoModalForm } from '../TodoModalForm'
import { TodoListHeader } from '../TodoListHeader'
import { TodoList } from './TodoList'
import { useModalForm, useTodoList } from '@hooks'

export const TodoListContainer: React.FC = () => {
  const { form } = useModalForm()
  const { list, search } = useTodoList()

  return (
    <div className='flex justify-center mt-10'>
      <div className='lg:w-2/3 md:w-3/4 w-full space-y-3 p-4'>
        <TodoModalForm
          form={form.instance}
          isOpen={form.isOpen}
          onCancel={form.onCancel}
          onSubmit={form.onSubmit}
          isLoading={form.isLoading}
        />
        <TodoListHeader onClick={form.onAddClick} search={search} />
        <TodoList
          onEditClick={form.onEditClick}
          onDeleteConfirm={form.onDeleteConfirm}
          list={list}
        />
      </div>
    </div>
  )
}
