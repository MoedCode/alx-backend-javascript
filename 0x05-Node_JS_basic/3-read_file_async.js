const fs = require('fs');

const countStudents = (dataPath) => new Promise((resolve, reject) => {
  fs.readFile(dataPath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      const fileLines = data
        .toString('utf-8')
        .trim()
        .split('\n');
      const studentGroups = {};
      const header = fileLines[0].split(',');
      const studentFields = header.slice(0, header.length - 1);

      // Iterate over each line in the file (excluding the header)
      for (const line of fileLines.slice(1)) {
        const studentRecord = line.split(',');
        const studentData = studentRecord.slice(0, studentRecord.length - 1);
        const field = studentRecord[studentRecord.length - 1];

        // Initialize the field group if it doesn't exist
        if (!Object.keys(studentGroups).includes(field)) {
          studentGroups[field] = [];
        }

        // Create a student object with field names as keys and data as values
        const studentEntries = studentFields.map((fieldName, idx) => [fieldName, studentData[idx]]);
        studentGroups[field].push(Object.fromEntries(studentEntries));
      }

      // Calculate the total number of students
      const totalStudents = Object.values(studentGroups)
        .reduce((prev, curr) => (prev || []).length + curr.length);
      console.log(`Number of students: ${totalStudents}`);

      // Log the number of students in each field and their names
      for (const [field, group] of Object.entries(studentGroups)) {
        const studentNames = group.map((student) => student.firstname).join(', ');
        console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
      }
      resolve(true);
    }
  });
});

module.exports = countStudents;
