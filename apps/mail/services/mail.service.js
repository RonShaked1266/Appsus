import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/storage.service.js'

export const mailService = {
    query,
    addMail,
    updateMail,
    removeMail,
    getMails,
    getMailById,
}

const DB_KEY = 'mailsDB'
// const gMails = []

const gLoggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}

const criteria = {
    status: 'inbox/sent/trash/draft', txt: 'puki',
    // no need to support complex text search 
    isRead: true, // (optional property, if missing: show all) 
    isStared: true, // (optional property, if missing: show all) 
    lables: ['important', 'romantic'] // has any of the labels 
}

function getMails() {
    return query()
    // return gMails
}

function query() {
    let mails = _loadFromStorage()
    if (!mails) {
        mails = _createMails()
        _saveToStorage(mails)
    }
    // gMails = mails
    return Promise.resolve(mails)
}

function getMailById(id) {
    // if the user didn't send a mail => return Promise.resolve with null:
    if (!id) return Promise.resolve(null)
    const mails = _loadFromStorage()
    const mail = mails.find(mail => id === mail.id)
    console.log('mail:', mail)
    return Promise.resolve(mail)
}

function removeMail(id) {
    let mails = _loadFromStorage()
    mails = mails.filter(mail => id !== mail.id)
    _saveToStorage(mails)
    return Promise.resolve(mails)
}

function addMail(id, subject, body, isRead, to) {
    let mails = _loadFromStorage()
    const mail = _createMail(id, subject, body, isRead, to)
    mails = [mail, ...mails]
    console.log('mail:', mail)
    console.log('mails:', mails)
    _saveToStorage(mails)
    return Promise.resolve(mail)
}

function updateMail(id, subject, body, isRead, to) {
    const mails = _loadFromStorage()
    let mail = mails.find(mail => id === mail.id)
    mail = _createMail(id, subject, body, isRead, to)
    _saveToStorage(mails)
    return Promise.resolve(mail)
}

// private functions:

function _createMails() {
    const mails = []
    for (let i = 0; i < 5; i++) {
        mails.push(_createMail())
    }
    return mails
}

function _createMail(id, subject, body, isRead, to) {
    return {
        id: id || 'Mail' + utilService.makeId(),
        subject: subject || 'Message' + utilService.getRandomIntInclusive(1, 100),
        body: body || utilService.makeLorem(20),
        isRead: isRead !== undefined ? isRead : utilService.getRandomIntInclusive(0, 1) ? true : false,
        sentAt: new Date(),
        to: to || 'momo@momo.com'
    }
}

function _saveToStorage(mails) {
    storageService.saveToStorage(DB_KEY, mails)
}

function _loadFromStorage() {
    return storageService.loadFromStorage(DB_KEY)
}