import { useMutation, useQueryClient } from '@tanstack/react-query'
import { message } from 'antd'
import axios from 'axios'

export const useTodoMutations = (todoId?: string) => {
  const queryClient = useQueryClient()

  async function addTodoFn (todo: Todo) {
    const { data: response } = await axios.post<{ data: Todo }>('/api/v1/todos', todo)

    return response.data
  }

  async function editTodoFn (todo: Todo) {
    const { data: response } = await axios.patch<{ data: Todo }>(`/api/v1/todos/${todoId}`, todo)

    return response.data
  }

  async function deleteTodoFn (id: string) {
    await axios.delete<{ data: Todo }>(`/api/v1/todos/${id}`)
  }

  const { mutateAsync: addTodo, isPending: isAddLoading } = useMutation({
    mutationFn: addTodoFn,
    onSuccess: async () => {
      message.success('Task added successfully!')
      await queryClient.invalidateQueries({ queryKey: ['todos'] })
    }
  })

  const { mutateAsync: editTodo, isPending: isEditLoading } = useMutation({
    mutationFn: editTodoFn,
    onSuccess: async () => {
      message.success('Task edited successfully!')
      await queryClient.invalidateQueries({ queryKey: ['todos'] })
    }
  })

  const { mutateAsync: deleteTodo, isPending: isDeleteLoading } = useMutation({
    mutationFn: deleteTodoFn,
    onSuccess: async () => {
      message.success('Task deleted successfully!')
      await queryClient.invalidateQueries({ queryKey: ['todos'] })
    }
  })

  return {
    addTodo,
    editTodo,
    deleteTodo,
    isLoading: isAddLoading || isEditLoading || isDeleteLoading
  }
}
