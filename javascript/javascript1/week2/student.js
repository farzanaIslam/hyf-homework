const class07Students = [];
function addStudentToClass(studentName) {
  if(studentName=="queen"){
    if(class07Students.length <=7){

      class07Students.push(studentName)
    }
  }
  else{
    if(class07Students.length <6 ){
      if(class07Students.includes(studentName)){
        console.log("already  name "+studentName + " added in this class" );
      }
      else{
        class07Students.push(studentName);
      }
      }
     else{
        console.log("full of student in this class you don't add in this class another student");
      }
      
  }
 
  return studentName;

}


let a=addStudentToClass("farzana");
let b=addStudentToClass("ala");
let c=addStudentToClass("ala");
let d=addStudentToClass("subah");
let e=addStudentToClass("ashish");

let f=addStudentToClass("farzana");
let g=addStudentToClass("vila");

let h=addStudentToClass("zana");
let i=addStudentToClass("qu");
 let j=addStudentToClass("queen");


 letlistOfStudent =addStudentToClass()
console.log(listOfStudent);