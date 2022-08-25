export const utilService = {
    makeId,
    makeLorem,
    getRandomIntInclusive,
    getRandomColor,
    padNum,
    getDayName,
    getDayOfMonth,
    getMonthName,
    getSeason,
    getTime
}

function makeId(length = 6) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    return txt
}

function makeLorem(size = 100) {
    var words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn']
    var txt = ''
    while (size > 0) {
        size--
        txt += words[Math.floor(Math.random() * words.length)] + ' '
    }
    return txt
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive 
}

function padNum(num) {
    return (num > 9) ? num + '' : '0' + num
}

function getRandomColor() {
    const letters = '0123456789ABCDEF'
    var color = '#'
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

// getDayName(new Date('12/25/2021'), 'he') ->  'יום שבת'
function getDayName(date, locale) {
    return date.toLocaleDateString(locale, { weekday: 'long' })
}

function getDayOfMonth(date) {
    console.log('typeOf date:', typeof date)
    // return date.toString().split(' ')[2]
    return new Date(date).toString().split(' ')[2] 
    // currently the date var type is a string when component did mount or mail deletion -> should be a date object
}

function getMonthName(date) {
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ]
    console.log('typeOf date:', typeof date)
    // return monthNames[date.getMonth()]
    return monthNames[new Date(date).getMonth()] // currently the date var type is a string when component did mount or mail deletion -> should be a date object
}

function getSeason(month) {
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ]

    switch (month) {
        case monthNames[5]:
        case monthNames[6]:
        case monthNames[7]:
            return 'summer'

        case monthNames[8]:
        case monthNames[9]:
        case monthNames[10]:
            return 'autumn'

        case monthNames[11]:
        case monthNames[0]:
        case monthNames[1]:
            return 'winter'

        case monthNames[2]:
        case monthNames[3]:
        case monthNames[4]:
            return 'spring';

        default:
            return 'UNKNOWN'
    }

}

function getTime(date) {
    return date.toString().split(' ')[4]
}