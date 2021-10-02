import React, { ChangeEvent, Dispatch, SetStateAction, useCallback } from 'react'
import { FaPen } from 'react-icons/fa'
import { JsxEmit } from 'typescript'
import './TodoModal.scss'

interface PropTypes {
    setIsModal: Dispatch<SetStateAction<boolean>>;
    modifyContents: string;
    setModifyContents: Dispatch<SetStateAction<string>>;
    onModifyTodo: () => void
}

const TodoModal = ({
    setIsModal,
    modifyContents,
    setModifyContents,
    onModifyTodo
}: PropTypes) : JSX.Element => {
    const onCloseModal = useCallback(() => {
        setIsModal(false)
    }, [setIsModal])
    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setModifyContents(value)
    }, [setModifyContents])
    
    return (
        <>
            <div className='TodoModal-Overlay' onClick={onCloseModal}></div>
            <div className='TodoModal'>
                <div className='TodoModal-Title'>
                    <div>Modify Todo</div>
                    <FaPen />
                </div>

                <div className='TodoModal-Contents'>
                    <input
                        type='text'
                        className='TodoModal-Contents-Input'
                        value={modifyContents}
                        onChange={onChange}
                        placeholder='Input Todo'
                    />
                    <button
                        className='TodoModal-Contents-Button'
                        onClick={onModifyTodo}
                    >Modify</button>
                </div>
            </div>
        </>
    )
}

export default TodoModal