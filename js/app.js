function sayHi(string) {
  console.log(string);
}

sayHi(`Hello`);

function isHappy(smile) {
  if (smile) {
    console.log(`happy`);
  } else {
    console.log(`sad`);
  }
}
isHappy(false);

function isBigger(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

isBigger(2, 33);



// WORK IN PROGRESS NOTE .isLargest() is not a function
function isBiggest(arrayOfNumbers) {
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    if(arrayOfNumbers[i].isLargest()){
        return arrayOfNumbers[i];
    }
  }
}
let biggest = [5, 3, 82, 19, 12];
isBiggest(biggest);
