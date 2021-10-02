import React, { useCallback } from 'react'
import { useRecoilState } from 'recoil'
import { Todo } from 'interface/todo'
import { todosState } from 'recoil/todo'
import TodoItem from './TodoItem'
import './TodoList.scss'

const TodoList = (): JSX.Element => {
    const [todos, setTodos] = useRecoilState<Todo[]>(todosState)

    const onComplete = useCallback((id: number) => {
        setTodos(todos.map((todo: Todo) => {
            return todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo
        }))
    }, [setTodos, todos])

    const onDelete = useCallback((id: number) => {
        setTodos(todos.filter((todo: Todo) => todo.id !== id))
    }, [setTodos, todos])

    return (
        <div className='TodoList'>
            {
                todos.length > 0 ? todos.map((todo: Todo) => {
                    const { id, contents, isCompleted } = todo

                    return (
                        <TodoItem
                            key={id}
                            id={id}
                            contents={contents}
                            isCompleted={isCompleted}
                            onComplete={onComplete}
                            onDelete={onDelete}
                            todos={todos}
                            setTodos={setTodos}
                        />
                    )
                }) :
                <div className='TodoList-NoList'>TodoList is empty.</div>
            }
        </div>
    )
}

export default TodoList