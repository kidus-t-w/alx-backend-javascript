export default function getListStudentIds(array) {
  if (Array.isArray(array)) {
    const a = array.map((value) => value.id);
    return a;
  }
  return [];
}
