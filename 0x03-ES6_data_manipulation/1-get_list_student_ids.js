// 1-get_list_student_ids.js

// Define the function getListStudentIds
export default function getListStudentIds(array) {
  // Check if the argument is an array
  if (!Array.isArray(array)) {
    return [];
  }

  // Use map function to extract ids from objects in the array
  return array.map((student) => student.id);
}
