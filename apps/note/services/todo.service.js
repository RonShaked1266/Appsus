import { storageService } from '../../../services/storage.service.js'
import { utilService } from '../../../services/util.service.js'

export const todoService = {


}

const KEY= todoDB
let gTodos
let gFilterBy = 'ALL'

function getTodosForDisplay() {
    let todos = _loadFromStorage()
    if (!todos) {
        todos = _createTodos()
        _saveToStorage(todos)
    }
    return Promise.resolve(todos)
}

function toggleTodo(todoId) {
    const todo = gTodos.find(todo => todo.id === todoId)
    todo.isDone = !todo.isDone
    _saveTodosToStorage(todos)
}

function addTodo(txt) {
    const todo = _createTodo(txt)
    gTodos.unshift(todo)
    _saveTodosToStorage(todos)

}

function getTotalCount() {
    return gTodos.length
}
function getActiveCount() {
    const activeTodos = gTodos.filter(todo => !todo.isDone)
    return activeTodos.length
}

function _saveToStorage(todos) {
    storageService.saveToStorage(KEY, gTodos)
}

function _loadFromStorage() {
    return storageService.loadFromStorage(KEY)
}
