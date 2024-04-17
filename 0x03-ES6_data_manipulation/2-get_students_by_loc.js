export default function getStudentsByLocation(students, city) {
  return students.filter((studentObj) => studentObj.city === city);
}
