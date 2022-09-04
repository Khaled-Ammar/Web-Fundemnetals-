//Always Hungry

function alwaysHungry(arr) {
    var arr;
    for(i = 0; i < arr.length; i++) {
        if(arr[i] === "food") {
            console.log("yummy");
        } else {
            console.log("I'm hungry");
        }
    } return arr;
}
var z = alwaysHungry([1244, "food", "pie", true, "food"]);
console.log(z);

// HighPass filter

function highPass(arr, cutoff) {
    var filteredArr = [];
    for (i =0; i < arr.length; i++) {
        if(arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

//Better than Average

function betterThanAverage(arr) {
    var sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    var count = 0
    average = sum / arr.length;
    for (i = 0; i < arr.length; i++) {
        if(arr[i] > average) {
            count++
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result);

//Array Reverse
//Write a function that will reverse the values in an array and return them.

function reverse(arr) {
    var reversedArr = [];
    for(i = arr.length-1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }
    return reversedArr;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

//Fibonacci Array

function fibonacciArray(num) {

    var fibArr = [0, 1];

    for (i = 2; i < num; i++) {
        fibArr.push(fibArr[i - 2] + fibArr[i - 1]);
}
        return fibArr;
}
    var result = fibonacciArray(10);
    console.log(result);