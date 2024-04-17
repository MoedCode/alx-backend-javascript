/**
 * Calculates the sum of student IDs.
 * @param {Array} studentList - An array of student objects.
 * @returns {number} - The sum of student IDs.
 */
export default function getStudentIdsSum(studentList) {
  // Using the reduce function to calculate the sum of student IDs
  const sum = studentList.reduce((accumulator, { id }) => accumulator + id, 0);

  // Returning the final sum
  return sum;
}
