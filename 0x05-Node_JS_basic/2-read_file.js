const fs = require('fs');
/**
 * Reads a CSV file and counts the number of students in each field.
 *
 * @param {string} path - The path to the CSV file.
 * @return {void} This function does not return anything.
 */
const countStudents = (path) => {
  // const rowObjects = [];
  let data;
  try {
    data = fs.readFileSync(path, 'utf-8');
  } catch (err) {
    console.log('Cannot load the database');
    return;
  }
  const row = data.split('\n');
  const headers = row[0].split(',');
  let csCount = 0;
  const csNames = [];
  let sweCount = 0;
  const sweNames = [];
  for (let i = 1; i < row.length; i += 1) {
    const columns = row[i].split(',');
    const rowObject = {};
    for (let j = 0; j < headers.length; j += 1) {
      rowObject[headers[j]] = columns[j];
    }
    // rowObjects.push(rowObject)
    if (rowObject.field === 'CS') {
      csNames.push(rowObject.firstname);
      csCount += 1;
    }
    if (rowObject.field === 'SWE') {
      sweNames.push(rowObject.firstname);
      sweCount += 1;
    }
  }
  console.log(`Number of students: ${row.length - 2}.`);
  console.log(`Number of students in CS: ${csCount}. List: ${csNames}`);
  console.log(`Number of students in SWE: ${sweCount}. List: ${sweNames}`);
  // console.log(rowObjects)
};

module.exports = countStudents;
