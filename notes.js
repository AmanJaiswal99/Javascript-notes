// Data types
let yourage = 10;                           // number
let yourname = 'aman';                      // string
let name = {first:'aman',last:'jaiswal'};   // object
let truth = false;                          // boolean
let groceries = ['apple','pear'];           // array
let value;                                  // undefined
let amount = null;                          // null

// Methods for Strings 
let fruits = 'apple\nbanana';               // new line
fruits.length;                              // length of fruit
fruits.indexOf('app');                      // index value of 'app'
fruits.slice(2,6);                          // slicing letters
fruits.replace('ap','xd');                  // changing string
fruits.toLowerCase;                         // string to uppercase
fruits.toUpperCase;                         // string to lowercase
fruits.charAt(2);                           // finding character
fruits[2];                                  // finding character
fruits.split('')                            // split every character
fruits.split(',');                          // split every word by comma

// Array
let cars = ['tesla','audi','bmw'];          // creating array
cars[1]                                     // access value of index=1
cars[0] = 'honda'                           // change value

for(let i=0; i<cars.length; i++){           // for loop to print every item of array
    console.log(cars[i]);                   // prints
}

// Methods for array
console.log('cars:', cars.toString());      // prints 'cars:' & converts array 'cars' to string 
cars.join('-');                             // joins the items in the array by '-'
cars.pop();                                 // deletes the last item in cars
cars.push('nano');                          // adds 'nano' to the last index in cars
cars[cars.length] = 'lambo'                 // adds 'lambo' to the last index in cars
cars[4] = 'skoda';                          // adds 'skoda' to index 5 of cars
cars.shift();                               // deletes the first item of cars
cars.unshift('maruti');                     // adds 'maruti' to the first index of cars
let fruitsandcars = fruits.concat(cars);    // combines/concat the two  arrays into a new array
fruitsandcars.slice(0,4);                   // slices the array to first 4 items
cars.reverse();                             // flips the order of the items
cars.sort();                                // sorts items alphabetically
numbers = [23,3,45,43,2,5];
(numbers.sort(function(a,b){return a-b}));  // sorts number in ascending  order
(numbers.sort(function(a,b){return b-a}));  // sorts number in descending order

let emptyArray = [];                        // appending number from 0 to 10 in an empty array
for(let a=0;a<=10;a++){
    emptyArray.push(a);
    
} console.log(emptyArray);                  // printing the empty array now

// objects in javascript (dictionary in python)
let student = { first:'Aman',
                last: 'jaiswal',   
                age:20,
                height:180,
                studentInfo: function(){    // this.first is used to access property 'first' in this object
                    return this.first;
                }
              };
student.first;                              // accessing the property 'first' and storing it in 'a'
student.first = 'rahul';                    // changing value   
student.studentInfo();                      // access the function studentInfo
