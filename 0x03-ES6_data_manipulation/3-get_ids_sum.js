import getListStudentIds from './1-get_list_student_ids';

export default function getStudentIdsSum(students) {
  const ids = getListStudentIds(students);
  const sum = ids.reduce((accmulator, value) => (accmulator + value), 0);
  return sum;
}
