function handleStudents(){
  var i = 0;  // scope: local variable, type: number
  var students = ['Jim', 'Bob', 'Tracy', 'Justin', 'Emily'];  // s: local, t:??? // array
  return function(){  // from SO: the inner function has access to the 
    // environment it was created within 
    // even after the code that created the environment has returned.
    var student =  students[i]; // s: local to handlestudents, t: string
    i+=1; 
    return student;// What type is this returning? string
  };
}

// What type of variable is nextStudent?
// t: ???    ITS A CLOSURE  aka a reference to a function
var nextStudent = handleStudents();   // this returns a string of the students name   //handleStudents returns a function that returns the next student
var nextStudent1 = handleStudents();

// onload
window.onload = function(){
  // Adding an event handler to our addStudent button
  document.getElementById("addStudent").onclick = function(){
    document.getElementById('students').innerHTML += nextStudent() + '<br/>\n';
    document.getElementById('students').innerHTML += nextStudent1() + '<br/>\n';

  };

  document.getElementById("clearStudents").onclick = function(){
    document.getElementById('students').innerHTML = '';
  };

  document.getElementById("resetClosure").onclick = function(){
    nextStudent = handleStudents();
    nextStudent1 = handleStudents();
  };
};
