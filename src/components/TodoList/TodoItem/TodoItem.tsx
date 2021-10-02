import React, { useCallback, useState } from 'react'
import { Todo } from 'interface/todo'
import { FaPen } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'
import { SetterOrUpdater } from 'recoil'
import './TodoItem.scss'
import TodoModal from 'components/TodoModal/TodoModal'

interface PropTypes {
    id: number;
    contents: string;
    isCompleted: boolean;

    onComplete: (id: number) => void;
    onDelete: (id: number) => void;

    todos: Todo[];
    setTodos: SetterOrUpdater<Todo[]>;
}

const TodoItem = ({
    id,
    contents,
    isCompleted,
    onComplete,
    onDelete,
    todos,
    setTodos

}: PropTypes): JSX.Element => {
    const [isMoal, setIsModal] = useState<boolean>(false)
    const [modifyContents, setModifyContents] = useState<string>('')

    const onModify = useCallback(() => {
        setIsModal(true)
        setModifyContents(contents)
    }, [contents])

    const onModifyTodo = useCallback(() => {
        if (!modifyContents.trim()) {
            return
        }

        setTodos(todos.map((todo: Todo) => {
            return todo.id === id ? { ...todo, contents: modifyContents } : todo
        }))

        setIsModal(false)
    }, [id, modifyContents, setTodos, todos])

    return (
        <>
            <div className='TodoItem'>
                <div
                    title={contents}
                    className={isCompleted ? 'TodoItem-Completed' : ''}
                    onClick={() => onComplete(id)}
                >
                    {contents}
                </div>

                <div className='TodoItem-Icons'>
                    <FaPen className='TodoItem-Icons-Pen' onClick={onModify} />
                    <MdClose className='TodoItem-Icons-Close' onClick={() => onDelete(id)} />
                </div>
            </div>

            {
                isMoal &&
                <TodoModal
                    setIsModal={setIsModal}
                    modifyContents={modifyContents}
                    setModifyContents={setModifyContents}
                    onModifyTodo={onModifyTodo}
                />
            }
        </>
    )
}

export default TodoItem