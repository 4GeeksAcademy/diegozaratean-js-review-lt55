import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  function generateRandomArray()
  {
    let auxArray = [];
    let randomLength = Math.floor(Math.random()*100);// 5
    for(let i = 0; i < randomLength; i++) auxArray.push(Math.floor(Math.random()*100));
    return auxArray;	
  }
  let myStupidArray = generateRandomArray();

  // Math.random() ====> 0 a 0.99999
  // Math.random() * 100 ====> 0 a 99.999
  // Math.floor(Math.random() * 100) ====> 0 a 99
  // Math.ceil(Math.random() * 100) ====> 1 a 100
  // Math.round(Math.random() * 100) ====> 0 a 100


  let theLastOne = myStupidArray[myStupidArray.length -1]
  console.log(theLastOne)
  console.log(myStupidArray)

};
