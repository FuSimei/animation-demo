import { INCREMENT, DECREMENT } from './actionType'

export const increment = (num) => ({ type: INCREMENT, data: num })
export const decrement = (num) => ({ type: DECREMENT, data: num })