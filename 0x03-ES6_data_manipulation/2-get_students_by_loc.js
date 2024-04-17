/*
export default function getStudentsByLocation(students, city) {
  return students.filter((studentObj) => studentObj.city === city);
}
*/
export default function getStudentsByLocation(StudentsList, concernLocation) {
  return StudentsList.filter(({ location }) => location === concernLocation);
}
