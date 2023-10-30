import { it, expect, describe, beforeAll, afterEach, afterAll } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node'
import { todos } from './todo.data'
import { TodoListContainer } from '@components'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

const server = setupServer(
  http.get('/api/v1/todos', () => {
    return HttpResponse.json({ data: todos })
  })
)

const queryClient = new QueryClient()

describe('TodoList component', () => {
  beforeAll(() => { server.listen() })
  afterEach(() => { server.resetHandlers() })
  afterAll(() => { server.close() })

  it('should display the list of todos', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <TodoListContainer />
      </QueryClientProvider>
    )

    // @ts-expect-error Intellisense fix
    await waitFor(() => expect(screen.getByText(/Water the plants/)).toBeInTheDocument())
    // @ts-expect-error Intellisense fix
    await waitFor(() => expect(screen.getByText(/Read about microservices/)).toBeInTheDocument())
    // @ts-expect-error Intellisense fix
    await waitFor(() => expect(screen.getByText(/Study npm workspaces/)).toBeInTheDocument())
    // @ts-expect-error Intellisense fix
    await waitFor(() => expect(screen.getByText(/Study Golang/)).toBeInTheDocument())
  })
})
