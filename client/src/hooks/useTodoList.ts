import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const stringContains = (a: string, b: string) => {
  return a.toLowerCase().includes(b.toLowerCase())
}

export const useTodoList = () => {
  async function getTodos () {
    const { data: response } = await axios.get<{ data: Todo[] }>('/api/v1/todos')

    return response.data
  }

  const { data: todos = [], isLoading } = useQuery({
    queryKey: ['todos'],
    queryFn: getTodos
  })

  const [searchValue, setSearchValue] = useState('')

  const onSearch = (value: string) => {
    setSearchValue(value)
  }

  const filterTodos = (todos: Todo[]) => {
    return todos.filter(({ content, created_by }) => {
      return (
        stringContains(content, searchValue) || stringContains(created_by.email, searchValue) ||
        stringContains(created_by.name as string, searchValue)
      )
    })
  }

  return {
    list: {
      todos: filterTodos(todos),
      isLoading
    },
    search: {
      value: searchValue,
      onSearch
    }
  }
}
