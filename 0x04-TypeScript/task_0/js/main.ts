export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Kidus',
  lastName: 'Tilahun',
  age: 24,
  location: 'Addis Ababa',
};

const student2: Student = {
  firstName: 'Leuel',
  lastName: 'Asfaw',
  age: 24,
  location: 'Addis Ababa',
};

const studentList: Array<Student> = [student1, student2];

export default function renderTable(studentList : Array<Student>) {
    // Creating table
  const table = document.createElement('table');
  const headRow = document.createElement('tr');
  table.insertAdjacentElement('beforeend', headRow);


  //inserting data 
  headRow.insertAdjacentHTML('beforeend', '<th>FirstName</th>');
  headRow.insertAdjacentHTML('beforeend', '<th>Location</th>');

  for (const student of studentList) {
    const studentRow  = document.createElement('tr')

    studentRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
    studentRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
    table.insertAdjacentElement('beforeend', studentRow);
  }

  document.body.insertAdjacentElement('beforeend', table);
}

renderTable(studentList);