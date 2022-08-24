import { storageService } from '../../../services/storage.service.js'
import { utilService } from '../../../services/util.service.js'

export const noteService = {
    getById,
    query,
    remove,
    addNote,
    
}

let gNotes
const KEY = 'notesDB'

function query() {
    let notes = _loadFromStorage()
    if (!notes) {
        notes = gNotes
        _saveToStorage(notes)
    }
    return Promise.resolve(notes)
}


function getById(noteId) {
    if (!noteId) return Promise.resolve(null)
    const notes = _loadFromStorage()
    const note = notes.find(note => noteId === note.id)
    return Promise.resolve(note)
}

function remove(noteId) {
    let notes = _loadFromStorage()
    notes = notes.filter(note => note.id !== noteId)
    _saveToStorage(notes)
    return Promise.resolve()
}

function addNote({txt}) {
    let notes = _loadFromStorage()
    const note = _createNote(txt)
    notes = [note, ...notes]
    _saveToStorage(notes)
    return Promise.resolve(note)
}

function _createNote(txt) {
    return {
        id: utilService.makeId(),
        type: "note-txt",
        isPinned: true,
        info: {
            txt
        }
    }
    
}

function _saveToStorage(notes) {
    storageService.saveToStorage(KEY, notes)
}

function _loadFromStorage() {
    return storageService.loadFromStorage(KEY)
}



gNotes = [
    {
     id: "n101",
     type: "note-txt",
     isPinned: true,
     info: {
     txt: "Fullstack Me Baby!"
     }
    },
    {
     id: "n102",
     type: "note-img",
     info: {
     url: "http://some-img/me",
     title: "Bobi and Me"
     },
     style: {
     backgroundColor: "#00d"
     }
    },
    {
     id: "n103",
     type: "note-todos",
     info: {
     label: "Get my stuff together",
     todos: [{ txt: "Driving liscence", doneAt: null },
     { txt: "Coding power", doneAt: 187111111 }]
     }
    }
    ];