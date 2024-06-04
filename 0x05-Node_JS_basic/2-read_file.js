#!/usr/bin/env node

const fs = require('fs')
const countStudents = (path) => {
    const rowObjects = [];
    fs.readFile(path, 'utf-8', (err, data) => {
        if (err){
            console.log('Cannot load the database')
            return
        }
        const row = data.split('\n')
        const headers = row[0].split(',')
        let cs_count = 0
        let cs_names = []
        let swe_count = 0
        let swe_names = []
        for (let i = 1; i < row.length; i++) {
            const columns = row[i].split(',');
            const rowObject = {};
            for (let j = 0; j < headers.length; j++) {
                rowObject[headers[j]] = columns[j];
            }
            // rowObjects.push(rowObject)
            if (rowObject['field'] === 'CS'){
                cs_names.push(rowObject['firstname'])
                cs_count += 1
            }
            if (rowObject['field'] === 'SWE'){
                swe_names.push(rowObject['firstname'])
                swe_count += 1
            }
        }
        console.log(`Number of students: ${row.length -2}.`)
        console.log(`Number of students in CS: ${cs_count}. List: ${cs_names}`)
        console.log(`Number of students in SWE: ${swe_count}. List: ${swe_names}`)
        // console.log(rowObjects)

    })
}

module.exports = countStudents