export const mailService = {
    query,
    addMail,
    updateMail,
    removeMail,
    getMails,
    getMailById,
}

const DB_KEY = 'mailsDB'
const gMails = []
/*
    function loadMails() {
    return [
        {
        id: 'e101', 
        subject: 'Miss you!', 
        body: 'Would love to catch up sometimes', 
        isRead: false, 
        sentAt : 1551133930594, 
        to: 'momo@momo.com'
        }
    ]
    }
*/
function getMails() {
    // return query()
    return gMails
}

function query() {
    let mails = _loadFromStorage()
    if (!mails) {
        mails = createMails()
        _saveToStorage(mails)
    }
    gMails = mails
    return Promise.resolve(mails)
}

function getMailById(mailId) {
    // if the user didn't send a mail => return Promise.resolve with null:
    if (!mailId) return Promise.resolve(null)
    const mails = _loadFromStorage()
    const mail = mails.find(mail => mailId === mail.id)
    return Promise.resolve(mail)
}

function removeMail(mailId) {
    let mails = _loadFromStorage()
    mails = mails.filter(mail => mailId !== mail.id)
    _saveToStorage(mails)
    return Promise.resolve()
}

function addMail(mailTitle, mailSubtitle, mailAuthors, mailPublishedDate, mailCategories) {
    let mails = _loadFromStorage()
    const mail = _createMail(mailTitle, mailSubtitle, mailAuthors, mailPublishedDate, mailCategories)
    mails = [...mails, mail]
    _saveToStorage(mails)
    return Promise.resolve(mail)
}

function updateMail(mailId, listPrice) {
    const mails = _loadFromStorage()
    let mail = mails.find(mail => mailId === mail.id)
    mail = { ...mail, listPrice }
    _saveToStorage(mails)
    return Promise.resolve(mail)
}

// private functions:

function _createMails() {
    const mails = []
    for (let i = 0; i < 5; i++) {
        
    }
    return mails
}

function _createMail() {
    return {
        
    }
}

function _saveToStorage(mails) {
    storageService.saveToStorage(DB_KEY, mails)
}

function _loadFromStorage() {
    return storageService.loadFromStorage(DB_KEY)
}