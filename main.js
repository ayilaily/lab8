function popup() {
  alert("This is a popup");
  document.getElementById("demo").innerHTML = "My text";

  //Variables
  var x = 3 + 2; // x is 5
  let y = "hello"; // y stores 10
  const PI = 3.14;
  z = "Tom";
  var x = "stop";
  console.log(x, y, z, PI);

  // Arrays
  const A = ["Tom", 25, 30];
  x = A[0]; // x stores “Tom”
  A[1] = 20; // A = [”Tom”, 20, 3]
  let n = A.length;
  let k = A[n - 1];
  A.push("John");
  A[10] = 100;

  console.log(A, n, k);
}

// objects
const car = {
  name: "Fiat", // note ending comma
  color: "white",
};


// labs
let lab1 = [5, 5, 5, 5, 10, 10];
let sum1 = lab1[0] + lab1[1] + lab1[2] + lab1[3] + lab1[4] + lab1[5];

let lab2 = [5, 5, 5, 5, 5, 5, 10];
let sum2 = lab2[0] + lab2[1] + lab2[2] + lab2[3] + lab2[4] + lab2[5] + lab2[6];

let lab3 = [5, 9, 10, 15];
let sum3 = lab3[0] + lab3[1] + lab3[2] + lab3[3];

let lab4_5 = [10, 5, 3, 5, 5, 5, 10, 10, 10, 10, 4];
let sum4_5 = (lab4_5[0] + lab4_5[1] + lab4_5[2] + lab4_5[3] + lab4_5[4] + lab4_5[5] + lab4_5[6] + lab4_5[7] + lab4_5[8] + lab4_5[9] + lab4_5[10])*0.5;

let lab6 = [5, 5, 10, 5, 5, 10];
let sum6 = lab6[0] + lab6[1] + lab6[2] + lab6[3] + lab6[4] + lab6[5];

let sums = [sum1, sum2, sum3, sum4_5, sum6];
avg_labs_score = (sum1 + sum2 + sum3 + sum4_5 + sum6)/5;
quiz_score = 32;
console.log(sums);

//total score
total_score = avg_labs_score*0.6 + quiz_score*0.4;


const results = {
lab1: [5, 5, 5, 5, 10, 10], // array of scores for lab1
lab2: [5, 5, 5, 5, 5, 5, 10], // array of scores for lab2
lab3: [5, 9, 10, 15], // array of scores for lab3
lab4_5: [10, 5, 3, 5, 5, 5, 10, 10, 10, 10, 4], // array of scores for lab4 and 5
lab6: [5, 5, 10, 5, 5, 10], // array of scores for lab6
quiz1: 32, // score of quiz1
sums: [sum1, sum2, sum3, sum4_5, sum6], // array of sums of each lab
total_score: (avg_labs_score*0.6 + quiz_score*0.4)*2.5 // computed total score in percent
}
console.log(results);


