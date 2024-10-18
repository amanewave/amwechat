import { createEvent, createStore } from 'effector'

const addSmth = createEvent()
export const $activeChat = createStore([1]).on(addSmth, (arr, addSmth) => [...arr, addSmth])

addSmth(2)
addSmth(3)