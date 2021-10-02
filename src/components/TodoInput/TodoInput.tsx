import React, { ChangeEvent, useCallback, KeyboardEvent } from 'react'
import { FaPen } from 'react-icons/fa'
import './TodoInput.scss'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { inputState, todosState } from 'recoil/todo'
import { Todo } from 'interface/todo'

const TodoInput = (): JSX.Element => {
    const [contents, setContents] = useRecoilState<string>(inputState)
    const todos = useRecoilValue<Todo[]>(todosState)
    const setTodos = useSetRecoilState<Todo[]>(todosState)

    const addTodo = useCallback(() => {
        if (!contents.trim()) {
            return
        }

        const nextId: number = todos.length > 0 ? todos[todos.length - 1].id + 1 : 0
        const todo: Todo = {
            id: nextId,
            contents,
            isCompleted: false
        }

        setTodos([...todos, todo])
        setContents('')
    }, [contents, setContents, setTodos, todos])

    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setContents(value)
    }, [setContents])

    const onKeyDown = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTodo()
        }
    }, [addTodo])

    return (
        <div className='TodoInput'>
            <input
                type='text'
                className='TodoInput-Input'
                value={contents}
                onChange={onChange}
                placeholder='Input Todo'
                onKeyDown={onKeyDown}
            />
            <FaPen className='TodoInput-Button' onClick={addTodo} />
        </div>
    )
}

export default TodoInput