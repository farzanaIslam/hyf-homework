const class07Students = [];
function addStudentToClass(studentName) {
  class07Students.push(studentName);
     return studentName;

}

function getNumberOfStudents() {
  console.log(class07Students.length);
}
let a=addStudentToClass("farzana");
console.log(a);

console.log(class07Students)