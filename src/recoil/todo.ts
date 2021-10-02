import { atom } from 'recoil'
import { Todo } from 'interface/todo'

export const inputState = atom<string>({
    key: 'inputState',
    default: ''
})

export const todosState = atom<Todo[]>({
    key: 'todos',
    default: [
        {
            id: 1,
            contents: 'Todo List 를',
            isCompleted: false
        },
        {
            id: 2,
            contents: '자유롭게',
            isCompleted: false
        },
        {
            id: 3,
            contents: '추가해보세요',
            isCompleted: false
        },
    ]
})