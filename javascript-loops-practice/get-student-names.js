/* exported getStudentNames */
function getStudentNames(students) {
  var getStudentsNames = [];
  for (var i = 0; i < students.length; i++) {
    getStudentsNames.push(students[i].name);
  }
  return getStudentsNames;
}
