import { createStore, createEvent } from 'effector'

export const $login = createStore({})


export const setData = createEvent()
$login.on(setData, (login,data)=> data)
$login.watch(data => {
	console.log(data)
})