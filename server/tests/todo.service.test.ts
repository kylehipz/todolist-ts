import { randomUUID } from 'crypto'
import { TodoListService } from '@services/todo'
import { TodoStubDB } from '@stubs'
import { todos } from './todo.data'

const todoListService = new TodoListService(new TodoStubDB(todos))

describe('Todo List Service', () => {
  it('should successfully list all todos', async () => {
    const todos = await todoListService.listTodos()

    expect(todos.length).toBe(8)
    expect(todos[0].content).toBe('Water the plants')
    expect(todos[0].completed).toBe(false)
    expect(todos[1].content).toBe('Wash the dishes')
    expect(todos[1].completed).toBe(true)
    expect(todos[2].content).toBe('Study Golang')
    expect(todos[2].completed).toBe(false)
    expect(todos[3].content).toBe('Study npm workspaces')
    expect(todos[3].completed).toBe(false)
    expect(todos[4].content).toBe('Read about microservices')
    expect(todos[4].completed).toBe(true)
    expect(todos[5].content).toBe('Study system design')
    expect(todos[5].completed).toBe(true)
    expect(todos[6].content).toBe('Study and implement goroutines')
    expect(todos[6].completed).toBe(false)
    expect(todos[7].content).toBe('Create an blog application using microservices')
    expect(todos[7].completed).toBe(false)
  })

  it('should successfully add a todo to the list', async () => {
    const newTodo: Todo = {
      content: 'Learn how struct embedding works',
      due_date: new Date('2023-11-01'),
      completed: false,
      created_by: {
        email: 'kylehipolito2109@gmail.com',
        name: 'Kyle Hipolito'
      }
    }

    const createdTodo = await todoListService.addTodo(newTodo)
    const todos = await todoListService.listTodos()

    expect(createdTodo).not.toBeNull()
    expect(createdTodo.id).toBeDefined()
    expect(createdTodo.content).toBe(newTodo.content)
    expect(createdTodo.completed).toBe(newTodo.completed)
    expect(createdTodo.created_by.email).toBe(newTodo.created_by.email)
    expect(createdTodo.created_by.name).toBe(newTodo.created_by.name)
    expect(todos.length).toBe(9)
  })

  it('should successfully edit a todo in the list', async () => {
    const todoId = 'd15cdb9c-11db-4c28-a88f-d608599cf50d'

    const oldTodo = await todoListService.getTodoById(todoId)

    await todoListService.updateTodo(todoId, {
      id: todoId,
      content: 'Water the plants twice',
      completed: true,
      due_date: new Date('2023-10-28'),
      created_by: {
        email: 'kylehipolito2109@gmail.com',
        name: 'Kyle Hipolito',
        picture: ''
      }
    })

    const updatedTodo = await todoListService.getTodoById(todoId)

    expect(updatedTodo).not.toBeNull()
    expect(updatedTodo).toBeDefined()
    expect(updatedTodo.id).toBe(oldTodo.id)
    expect(updatedTodo.content).toBe('Water the plants twice')
    expect(updatedTodo.completed).toBe(true)
    expect(updatedTodo.content).not.toBe(oldTodo.content)
    expect(updatedTodo.completed).not.toBe(oldTodo.completed)
    expect(updatedTodo.created_by.email).toBe(oldTodo.created_by.email)
    expect(updatedTodo.created_by.name).toBe(oldTodo.created_by.name)
  })

  it('should successfully delete a todo from the list', async () => {
    const todoId = '85e5c620-3326-4fba-8d86-e1e9d26ceee7'

    const todo = await todoListService.getTodoById(todoId)
    await todoListService.deleteTodo(todoId)

    const fn = async () => {
      await todoListService.getTodoById(todoId)
    }

    expect(todo).not.toBeNull()
    expect(todo).toBeDefined()
    expect(todo.id).toBe(todoId)
    expect(todo.content).toBe('Study Golang')
    await expect(fn).rejects.toThrow('Todo not found')
  })

  it('should fail if todo is not found', async () => {
    const fn = async () => {
      await todoListService.getTodoById(randomUUID())
    }

    await expect(fn).rejects.toThrow('Todo not found')
  })

  it('should fail if todo to edit is not found', async () => {
    const fn = async () => {
      const todoId = randomUUID()

      await todoListService.updateTodo(todoId, {
        id: todoId,
        content: 'Water the plants twice',
        completed: true,
        due_date: new Date('2023-10-28'),
        created_by: {
          email: 'kylehipolito2109@gmail.com',
          name: 'Kyle Hipolito',
          picture: ''
        }
      })
    }

    await expect(fn).rejects.toThrow('Todo not found')
  })

  it('should fail if todo to delete is not found', async () => {
    const fn = async () => {
      await todoListService.deleteTodo(randomUUID())
    }

    await expect(fn).rejects.toThrow('Todo not found')
  })
})
