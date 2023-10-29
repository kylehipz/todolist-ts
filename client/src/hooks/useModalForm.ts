import { useState, useEffect } from 'react'
import { Form } from 'antd'
import moment from 'moment'
// * Hooks
import { useUserStore } from '@store'
import { useTodoMutations } from './useTodoMutations'

export const useModalForm = () => {
  const { user } = useUserStore()

  const [form] = Form.useForm<Todo>()
  const [isOpen, setIsOpen] = useState(false)
  const [selectedTodo, setSelectedTodo] = useState<Todo>()
  const { addTodo, editTodo, deleteTodo, isLoading } = useTodoMutations(selectedTodo?.id)

  useEffect(() => {
    if (selectedTodo === undefined) {
      form.resetFields()
    } else {
      form.setFieldsValue({
        ...selectedTodo,
        due_date: moment(selectedTodo.due_date)
      })
    }
  }, [selectedTodo])

  const onAddClick = () => {
    setIsOpen(true)
  }

  const onEditClick = (todo: Todo) => {
    setSelectedTodo(todo)
    setIsOpen(true)
  }

  const onCancel = async () => {
    form.resetFields()
    setSelectedTodo(undefined)
    setIsOpen(false)
  }

  const onSubmit = async () => {
    const todo = await form.validateFields()

    if (selectedTodo === undefined) {
      const payload: Todo = {
        ...todo,
        due_date: new Date(moment(todo.due_date).format()),
        completed: false,
        created_by: {
          email: user?.email as string
        }
      }

      await addTodo(payload)
    } else {
      const payload: Todo = {
        ...selectedTodo,
        ...todo,
        due_date: new Date(moment(todo.due_date).format())
      }

      await editTodo(payload)
    }

    setIsOpen(false)
    form.resetFields()
  }

  const onDeleteConfirm = async (id: string) => {
    await deleteTodo(id)
  }

  return {
    form: {
      instance: form,
      isOpen,
      isLoading,
      onAddClick,
      onEditClick,
      onDeleteConfirm,
      onSubmit,
      onCancel
    }
  }
}
