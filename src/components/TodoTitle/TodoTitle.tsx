import React from 'react'
import { GiWireCoil } from 'react-icons/gi'
import './TodoTitle.scss'

const TodoTitle = (): JSX.Element => {
    return (
        <div className='TodoTitle'>
            <GiWireCoil className='TodoTitle-Icon' />
            <div className='TodoTitle-Title'>TodoList with Recoil</div>
        </div>
    )
}

export default TodoTitle