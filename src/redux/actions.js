export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

let nextTodoIs = 0

export function addTodo(text) {
  return {
    type: ADD_TODO,
    id: nextTodoIs++, 
    text
  }
}

export function toggleTodo(id) {
  return {type: TOGGLE_TODO, id}
}

export function setVisibilityFilter(visibilityFilter) {
  return {type: SET_VISIBILITY_FILTER, visibilityFilter}
}