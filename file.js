// JS Fundamentals 12
// Write a function called flipIt that takes in an array and returns the reverse of that array.
// (DO NOT use .reverse() to complete this challenge.)
function flipIt(a) {
  var b = [];
  var counter = 0;
  for (var i = a.length-1; i >= 0; i -= 1) {
    b[counter] = a[i];
    counter += 1;
  }
  return b;
}

function reversedLooper(n) {
	var result = -2;
  for (var i = n.length - 1; i >= 0; i--) {
      n[i] = n[i] + result;
      result++;
  }
  return n;
}

//next line//

var myArray = [];
function arrayFiller(x) {
 for (var i = 0; i < x; i++) {
 	myArray.push("item");
 }
 return myArray;
}

//next line//

function longer(arr1,arr2) {
  if (arr1 > arr2) {
    return arr1;
  }
  else {
    return arr2
  }
}

//next line//

function first(x) {
  return x[0];
}

//next line//

function last(x) {
  return x[x.length - 1];
}

//next line//

function maker() {
  var newArr = [];
  for (var i = 1; i < 26; i++) {
    newArr.push(i)
  }
  return newArr;
}

//next line//

var evens = []; // Do not edit this line.
var odds = []; // Do not edit this line.

function oddsAndEvens(nums) {
  var result = [evens, odds];
  for (var i = 0; i < nums.length; i++) {
    if ((nums[i] % 2) === 0) {
      evens.push(nums[i]);
    }
    else {
      odds.push(nums[i]);
    }
  }
  return result;
}

//next line//

function findInArray(arr,value) {
  if (arr.indexOf(value) !== -1) {
    return true;
  }
  else {
    return false;
  }
}

function myLoop(startNum,incNum) {

  for (var i = 0; i < incNum; i++) {
    startNum = startNum + 1;
  }
  return startNum;
}

function looper(arrNum) {
  for (var i = 0; i < arrNum.length; i++) {
    arrNum[i] = arrNum[i] + 5;
  }
  return arrNum;
}

function exponent(base, exp) {
  var result = 1;
  for (var i = 0; i < exp; i++)
    result *= base;
  return result;
}

var newStr = "";
function reverse(str) {
  for (var i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}
