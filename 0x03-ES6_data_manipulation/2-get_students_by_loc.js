export default function getStudentByLocation(sList, sLocation) {
  const s = sList.filter((list) => list.location === sLocation);
  return s;
}
