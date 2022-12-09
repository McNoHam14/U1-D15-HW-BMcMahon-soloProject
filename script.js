/*----------- EX 21 -----------*/
/* 21) Given variables x = "John" and y = "Doe", write on the console "John <> Doe" /*

/*
let x = "John"
let y = "Doe"

console.log(x + "<>" + y)]
*/

/*----------- EX 22 -----------*/
/* 22) Create an object with properties such name, surname, email */

let objectContact = {
    name:"Ben",
    surname: "McMahon",
    email: "ben@hotmail.co.uk"
}

console.log(objectContact)

/*----------- EX 23 -----------*/
/* 23) Delete the email property from the previously created object */

delete objectContact.email;

console.log(objectContact)

/*----------- EX 24 -----------*/
/* 24) Create an array with 10 strings in it  */

let arrayOfStrings = []
for (let i = 0; i <10; i++) {
    arrayOfStrings.push('string')
}

/*----------- EX 25 -----------*/
/* 25) Print in the console every string from the previous array */

console.log(arrayOfStrings)

/*----------- EX 26 -----------*/
/* 26) Create an array with 100 random numbers in it */

let randomArray = []
for (let i= 0; i < 100; i++) {
    randomArray.push(Math.round(Math.random() * 100))
}

console.log(randomArray)

/*
let arrayLength = 100
let randomArray = []

for (let i = 0; i < arrayLength; i++) {
    let arrayStore = [] 
    for (let j = 0; j < arrayStore; j++) {
    arrayStore.push(Math.round(Math.random())) 
    }
     randomArray.push(arrayStore)
}

console.log(randomArray)
*/


// convert these floats to integers using Math.floor

/*
let min = 1
let max = 999
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
console.log(randomNumber)

for (let i = 0; i < 100; i++) {
    randomArray.push(randomNumber)
}
// for loop to push random number to array 100 times
*/


/*
function generateRandomNumber() {
    let min = 1
    let max = 76
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    console.log(randomNumber)
    array.push(randomNumber)
    console.log("hi") // array is saving everything
    console.log(array)
    return randomNumber
  }
*/

/*----------- EX 27 -----------*/
/* 27) Write a function to get the maximum and minimum values from the previously created array */

function getMinAndMax (randomArray) {
    let arraySize = randomArray.length;
    if (arraySize > 0) {
        var arrayOfStringsMax = arrayOfStringsMin = randomArray[0];
        for (var i = 0; i <= arraySize; i++) {
            if (randomArray[i] < arrayOfStringsMax) { 
                arrayOfStringsMax = arrayOfStrings[i];
            } else if(arrayOfStrings[i] < arrayOfStringsMin) {
                arrayOfStringsMin = randomArray[i];
            }
    }
    var minMax = [arrayOfStringsMin,arrayOfStringsMax];
    return minMax;
} else {
    return 0;
}
}

console.log(getMinAndMax)

//returning 'string' as the largest value not correct
// parseInt


/*----------- EX 28 -----------*/
/* 28) Create an array of arrays, in which every array has 10 random numbers */

let randomArrayOfTen = [];
for(let i =0; i< 10; i++) {
    let current = [];
    for(let j = 0; j < 10; j++)
    current.push(Math.floor(Math.random() * 10));
    randomArrayOfTen.push(current);
}

console.log(randomArrayOfTen)

/*
const randomArrayOfTen = Array(10)
. fill()
.map(() => Math.floor(Math.random()*10 +1));

console.log(randomArrayOfTen)
*/


/*----------- EX 29 -----------*/
/* 29) Create a function that gets 2 arrays as parameters and returns the longest one */

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 55, 56]
let arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

function whichIsLonger (arr1, arr2) {
    if (arr1.length > arr2.length) {
        return arr1
    } else if (arr1.length < arr2.length) {
        return arr2
    }
    else {
        // return false
        console.log("These arrays are the same sizes")
    }
}

console.log(whichIsLonger)

// check when you put in number like 55 why this is showing as longer


/*----------- EX 30 -----------*/
/* 30) Create a function that gets 2 arrays of numbers as parameters and returns the one with the higher sum of values */

let arrSum1 = [1, 2, 3, 9]
let arrSum2 = [0, 1, 2, 6]

function findSum(array) {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < arrSum1.length; i++) {
        sum1 += arrSum1[i];
    }
    for (let i = 0; i < arrSum2.length; i++) {
        sum2 += arrSum2[i];
    }
    if (sum1 > sum2) {
        return sum1;
    } else if (sum1 < sum2) {
        return sum2;
    } else {
        return ("They are the same") 
    }
    }


/*
JS EXERCISES

21) Given variables x = "John" and y = "Doe", write on the console "John <> Doe" - DONE
22) Create an object with properties such name, surname, email - DONE
23) Delete the email property from the previously created object - DONE 
24) Create an array with 10 strings in it - DONE
25) Print in the console every string from the previous array - DONE
26) Create an array with 100 random numbers in it - DONE
27) Write a function to get the maximum and minimum values from the previously created array
28) Create an array of arrays, in which every array has 10 random numbers
29) Create a function that gets 2 arrays as parameters and returns the longest one
30) Create a function that gets 2 arrays of numbers as parameters and returns the one with the higher sum of values
*/


/*----------- EX 31 -----------*/
/* 31) Get the element with an id of "container" from the page */

let idContainer = document.getElementById("container")

console.log(idContainer)

/*----------- EX 32 -----------*/
/* 32) Get every <td> element from the page */

let elementTd = document.getElementsByTagName('td')

console.log(elementTd)

/*----------- EX 33 -----------*/
/* 33) Use a loop for printing the text inside of every <td> element in the page */

// function printTdElement() {

let tdText = document.querySelectorAll("td")
for (let td of tdText) {
    console.log("text of td;",td.innerText);
}

/*----------- EX 34 -----------*/
/*  34) Write a function to change the heading of the page */

    let h1Node = document.querySelector("h1");
    let changeTitle = function (newTitle) {
        h1Node.innerText = newTitle;
    }

// changeTitle("Change this title")

/*----------- EX 35 -----------*/
/* 35) Write a function to add an extra row to the table */

function newRow() {
    let newRow = document.createElement("tr")
    newRow.innerText = "This is a new row";

    document.getElementById("items").appendChild(newRow);
}


// not working yet fix getElementById as think it is something to do with this id.

/*----------- EX 36 -----------*/
/* 36) Write a function to add a class of "test" to each row in the table */

function addClassTest() {
    let rowsNode = document.querySelectorAll("td");
    for (let row of rowsNode) {
        row.classList.add("Test")
    }
}

addClassTest()


/*----------- EX 37 -----------*/
/* 37) Write a function to add a red background to every link in the page */

function addRedBackground() {
    let newBackground = document.createAttribute("style")
    newBackground.value = "background-color:red";
    let linkChange = document.getElementsByTagName('a')[0];
    linkChange.setAttributeNode(newBackground);
}

/*----------- EX 38 -----------*/
/* 38) Console log "Page loaded" when the page is correctly loaded */

console.log("Page Loaded")



/*----------- EX 39 -----------*/
/* 39) Write a function to add new items to a unordered list */

function addNewItemsToUoList() {

}

/*----------- EX 40 -----------*/
/* 40) Write a function to empty a list */

function emptyList() {

}


/*
DOM EXERCISES

31) Get the element with an id of "container" from the page
32) Get every <td> element from the page
33) Use a loop for printing the text inside of every <td> element in the page
34) Write a function to change the heading of the page
35) Write a function to add an extra row to the table
36) Write a function to add a class of "test" to each row in the table
37) Write a function to add a red background to every link in the page
38) Console log "Page loaded" when the page is correctly loaded
39) Write a function to add new items to a unordered list
40) Write a function to empty a list
*/

/*
EXTRA EXERCISES

41) Add an eventListener to show an alert when the cursor hovers a link, displaying its href property
42) Create a button that will hide every image on the page when clicked
43) Create a button that will hide or show the table on the page when clicked
44) Write a function for calculating the sum of every number inside all the table cells (if their content is numeric)
45) Delete the last letter from the heading each time the user clicks on it
46) Change the background color of a <td> if the user clicks on it
47) Add a delete button at the bottom of the table, when clicked it should delete a random <td>
48) Add automatically a pink border to a cell when the mouse hovers it
49) Write a function to create a table with 4 rows and 3 columns programmatically and add it to the bottom of the page
50) Write a function to remove the last table from the page
*/

/* WHEN YOU ARE FINISHED
  Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/

