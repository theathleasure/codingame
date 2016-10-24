/**
 * A program that returns the closest number to 0. If there's a negative and a positive one with the same distance, positive comes first.
 **/

var n = parseInt(readline()); // the number of temperatures to analyse
var temps = readline(); // the n temperatures expressed as integers in a string ranging from -273 to 5526
var array = [];

/**
 * split string of integers into values in an array
 **/
array = temps.split(" ");

/**
 * if array is empty return 0 instead of undefined
 **/
if(n === 0) {
    print("0");
} else {

/**
 * sort array by ascending order to have negative numbers to the left
 **/
array.sort(function(a, b){return a-b});

/**
 * sort array by descending absolute value order to make the positive
 * value with the smallest distance from 0 on the last value of the array
 **/
array.sort(function(a, b){return Math.abs(b)-Math.abs(a)});

/**
 * print the last value of the array
 **/
print(array[n-1]);
}
