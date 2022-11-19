// Function Expression
const canada = function () {};

const canandaArrow = () => {
  console.log('cold');
};

// Function Declaration
function india() {
  console.log('warm');
}

// Function Invocation / Call / Execution -> create execution context
// function execution cotext: this, arguments
canada();
india();

// ----------------------------------------------------------------------------

function two() {
  var isValid; // undefined
}

function one() {
  var isValid = true; // variable(local) enviroment
  two(); // new EC
}

var isValid = false;
one();

// 각각의 EC는 각각의 variavble environment를 가진다.
//two() -- undefined
//one() -- true
//global() == false
