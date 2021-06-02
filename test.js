const csv = require('./csv')

csv.readCSV('sample.csv', function (arr) {
    console.log(arr)
})

const testTable = [
    {
        'fname': 'Jim',
        'lname': 'Bob',
        'pass': 'monkeys'
    },
    {
        'fname': 'Beth',
        'lname': 'simpson',
        'pass': 'coach'
    },
    {
        'fname': 'Jeff',
        'lname': 'Johnson',
        'pass': 'cooties'
    }
]

csv.writeCSV('newFile.csv', testTable)
