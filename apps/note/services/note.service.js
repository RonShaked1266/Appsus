import { storageService } from '../../../services/storage.service.js'
import { utilService } from '../../../services/util.service.js'

export const noteService = {
    getById,
    query,
    remove,
    addNote,
    updateNote,
    removeTodo

}

let gNotes
const KEY = 'notesDB'

function query(filterBy) {
    let notes = _loadFromStorage()
    if (!notes) {
        notes = gNotes
        _saveToStorage(notes)
    }
    console.log(filterBy)

    if (filterBy) {
        let { name, byType } = filterBy
        console.log('filterBy from service', filterBy);
        notes = notes.filter(note => (      
            note.type.includes(byType)          
            // note.type.toLowerCase().includes(byType.toLowerCase())          
            // && note.type.toLowerCase().includes(type.toLowerCase())          
        ))
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

function removeTodo(idx, noteId) {
    let notes = _loadFromStorage()
    const note = notes.find(note => noteId === note.id)
    // console.log(note)
    notes = notes.filter(note => note.id !== noteId)
    const newNote = note.info.todos.splice(idx, 1)
    notes = [newNote, ...notes]
    _saveToStorage(notes)
    return Promise.resolve(newNote)
}

function addNote({ txt, type, title }) {
    let notes = _loadFromStorage()
    const newNote = _createNote(txt, type, title)
    notes = [newNote, ...notes]
    _saveToStorage(notes)
    return Promise.resolve(newNote)
}

function updateNote(note) {
    // console.log(note)
    // console.log(note.txt)
    console.log(note.bgColor)
    let notes = _loadFromStorage()
    const noteToUpdate = _update(note)
    console.log(noteToUpdate)
    notes = notes.map(note => note.id === noteToUpdate.id ? noteToUpdate : note)
    _saveToStorage(notes)
    return Promise.resolve(noteToUpdate)
}

function _update(note) {
    if (note.type === "note-txt") {
        return {
            id: note.id,
            type: "note-txt",
            isPinned: true,
            info: {
                txt: note.txt
            },
            style: {
                backgroundColor: note.bgColor
            }
        }
    }
    if (note.type === "note-img") {
        return {
            id: note.id,
            type: "note-img",
            info: {
                url: note.info.url,
                title: note.txt
            },
            style: {
                backgroundColor: note.bgColor
            }
        }
    }
    if (note.type === "note-Video") {
        return {
            id: note.id,
            type: "note-video",
            info: {
                url: note.txt,
                title: "Video Play"
            },
            style: {
                backgroundColor: note.bgColor
            }
        }
    }
    if (note.type === "note-todos") {
        const str = note.txt.split(' ')
        const date = new Date()
        console.log(str[0])
        return {
            id: note.id,
            type: "note-todos",
            info: {
                label: "TODOS",
                todos: [{ txt: str[0], doneAt:  utilService.getDayOfMonth(date) + ' ' + utilService.getMonthName(date) },
                { txt: str[1], doneAt: utilService.getDayOfMonth(date) + ' ' + utilService.getMonthName(date) },
                { txt: str[2], doneAt: utilService.getDayOfMonth(date) + ' ' + utilService.getMonthName(date)}]
            },
            style: {
                backgroundColor: note.bgColor
            }
        }
    }

}
function _createNote(txt, type, title) {
    if (type === "note-txt") {
        return {
            id: utilService.makeId(),
            type: "note-txt",
            isPinned: true,
            info: {
                txt
            },
            style: {
                backgroundColor: "white"
            }
        }
    }
    if (type === "note-img") {
        return {
            id: utilService.makeId(),
            type: "note-img",
            info: {
                url: txt,
                title
            },
            style: {
                backgroundColor: "white"
            }
        }
    }
    if (type === "note-Video") {
        return {
            id: utilService.makeId(),
            type: "note-video",
            info: {
                url: txt,
                title
            },
            style: {
                backgroundColor: "white"
            }
        }
    }
    if (type === "note-todos") {
        const str = txt.split(' ')
        const date = new Date()
        console.log(str[0])
        return {
            id: utilService.makeId(),
            type: "note-todos",
            info: {
                label: title,
                todos: [{ txt: str[0], doneAt:  utilService.getDayOfMonth(date) + ' ' + utilService.getMonthName(date) },
                { txt: str[1], doneAt: utilService.getDayOfMonth(date) + ' ' + utilService.getMonthName(date) },
                { txt: str[2], doneAt: utilService.getDayOfMonth(date) + ' ' + utilService.getMonthName(date)}]
            },
            style: {
                backgroundColor: "white"
            }
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
        },
        style: {
            backgroundColor: "white"
        }
    },
    {
        id: "n102",
        type: "note-img",
        info: {
            url: "https://picsum.photos/id/237/200/300",
            title: "My Dog"
        },
        style: {
            backgroundColor: "yellow"
        }
    },
    {
        id: "n103",
        type: "note-video",
        info: {
            url: "https://www.youtube.com/embed/A_MjCqQoLLA?controls=0",
            title: "Video play"
        },
        style: {
            backgroundColor: "white"
        }
    },
    {
        id: "n104",
        type: "note-todos",
        info: {
            label: "Get my stuff together",
            todos: [{ txt: "Driving liscence", doneAt: null },
            { txt: "Coding power", doneAt: ''}]
        },
        style: {
            backgroundColor: "blue"
        }
    },
    {
        id: "n105",
        type: "note-todos",
        info: {
            label: "Get my stuff together",
            todos: [{ txt: "Driving liscence", doneAt: null },
            { txt: "Coding power", doneAt: ''}]
        },
        style: {
            backgroundColor: "yellow"
        }
    },
    {
        id: "n106",
        type: "note-img",
        info: {
            url: "https://picsum.photos/seed/picsum/200/300",
            title: "Switzerland"
        },
        style: {
            backgroundColor: "purple"
        }
    },
];