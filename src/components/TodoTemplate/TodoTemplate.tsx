import React from 'react'
import './TodoTemplate.scss'
import TodoInput from 'components/TodoInput'
import TodoList from 'components/TodoList'
import TodoTitle from 'components/TodoTitle'

const TodoTemplate = (): JSX.Element => {
    return (
        <div className='TodoTemplate'>
            <div className='TodoTemplate-Contents'>
                <TodoTitle />
                <TodoList />
                <TodoInput />
            </div>
        </div>
    )
}

export default TodoTemplate