export default function updateStudentGradeByCity(sList, city, newGrade) {
  const students = sList.filter((value) => value.location === city);
  for (let i = 0; i < students.length; i += 1) {
    students[i].grade = 'N/A';
  }
  const updatedGrade = students.map((v) => {
    const studentCopy = { ...v };
    for (let j = 0; j < newGrade.length; j += 1) {
      if (studentCopy.id === newGrade[j].studentId) {
        studentCopy.grade = newGrade[j].grade;
      }
    }
    return studentCopy;
  });
  return updatedGrade;
}
