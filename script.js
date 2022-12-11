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


/*----------- EX 21 -----------*/
/* 21) Given variables x = "John" and y = "Doe", write on the console "John <> Doe" */

let x = "John"
let y = "Doe"

console.log(x + "<>" + y)

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
for (let i = 0; i < 10; i++) {
    arrayOfStrings.push("Example array of 10 strings: " + i)
}

console.log(arrayOfStrings)

/*----------- EX 25 -----------*/
/* 25) Print in the console every string from the previous array */

for (let string of arrayOfStrings)
console.log(string)

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

function getMinAndMax(numbers) {
    let min = numbers[0]
    let max = numbers[0]

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < min){
            min = numbers[i]
    } 
    if (numbers[i] > max) {
        max = numbers[i]
    }
}
return {min, max}
}

console.log(getMinAndMax(randomArray))

/*
function getMinAndMax(numbers) {
    let arraySize = randomArray.length;
    if (arraySize > 0) {
        var arrayOfStringsMax = arrayOfStringsMin = randomArray[0];
        for (var i = 0; i <= arraySize; i++) {
            if (randomArray[i] > arrayOfStringsMax) { 
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

console.log(getMinAndMax(parseInt(randomArray)))

// returning 'string' as the largest value so not correct
// parseInt
*/

/*----------- EX 28 -----------*/
/* 28) Create an array of arrays, in which every array has 10 random numbers */

let randomArrayOfTen = [];
for(let i =0; i < 10; i++) {
    let currentArray = [];
    for(let j = 0; j < 10; j++) {
    currentArray.push(Math.floor(Math.random() * 100));
    }
    randomArrayOfTen.push(currentArray);
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

// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 55]
// let arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

let arr1 = [1,2,3]
let arr2 = [2, 55]

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

console.log(whichIsLonger(arr1,arr2))

// check when you put in number like 55 why this is showing as longer (added .length)


/*----------- EX 30 -----------*/
/* 30) Create a function that gets 2 arrays of numbers as parameters and returns the one with the higher sum of values */

let arrSum1 = [1, 10, 20,30]
let arrSum2 = [0, 1, 2, 5, 8, 15, 1,30]

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

console.log("The longest array is equal to:")
console.log("30) The longest array is equal to:", findSum(arrSum1,arrSum2))

// console.log("The longest array equals: "(findSum(arrSum1, arrSum2)))
//console.log(findSum("LongestArray: "(arrSum1, arrSum2)))
// figure out why can't print text before

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

/*----------- EX 31 -----------*/
/* 31) Get the element with an id of "container" from the page */

let idContainer = document.getElementById("container")

console.log("31)", idContainer)

/*----------- EX 32 -----------*/
/* 32) Get every <td> element from the page */

let elementTd = document.getElementsByTagName('td')

console.log("32)", elementTd)

/*----------- EX 33 -----------*/
/* 33) Use a loop for printing the text inside of every <td> element in the page */

// function printTdElement() {

let tdText = document.querySelectorAll("td")
for (let td of tdText) {
    console.log("33) text of td;",td.innerText);
}

/*
for (i = 0; i < tdText.innerText; i++) {
    tdText = "New Text Example"
}
*/


/*----------- EX 34 -----------*/
/*  34) Write a function to change the heading of the page */

function changeHeading(text) {
    let h1 = document.querySelector("h1")
    h1.innerText = text;
}
console.log("34) Title has been changed to New Title")
changeHeading("New Title")

/*
function changeHeading() {
    let h1Node = document.querySelector("h1");
    let changeTitle = function (newTitle) {
        h1Node.innerText = "New Title";
    }
}
changeHeading("Change this title")
*/

/*----------- EX 35 -----------*/
/* 35) Write a function to add an extra row to the table */

function newRow() {
    let tBodyNode = document.querySelector("tbody");
    let tr = document.createElement("tr");
    for (let i= 0; i < 5; i++) {
    let td = document.createElement("td");
    td.innerText = i+ 1;
    tr.appendChild(td);
    }
    tBodyNode.appendChild(tr);
}

console.log("35) New Row Added")

newRow()
newRow()
newRow()

/*
    for (let i= 0; i < 5; i++) {
        let td = document.createElement("td");
        td.innerHTML = "letter" + (i+10).toString(36) + " ";
        td.style.listStyle = "none";
        td.style.display = "inline";
        
    }
    document.getElementById("td").appendChild(tr);
}
// tried to convert number to letters of alphabet
*/

/*
        td.innerText = (i + 1).toString(36);
        // for loop a - d
*/


// grab table body = querySelector
// create new tr = createElement ('tr')
// td = column, tr = row
// for loop = 5
// {let new = document.createElement('td)}
// td.innerText = i + 1
// tr.appendChild(td)
// tbody.appendChil(tr)


/*function newRow() {
    let newRow = document.createElement("tr")
    newRow.innerText = "This is a new row";

    document.getElementsByTagName("tables").appendChild(newRow);
}

newRow()
// not working yet fix getElementById as think it is something to do with this id.
*/

/*----------- EX 36 -----------*/
/* 36) Write a function to add a class of "test" to each row in the table */


function addClassTest() {
    let rowsNode = document.querySelectorAll("td");
    for (let row of rowsNode) {
        row.classList.add("Test")
    }
}

addClassTest()
console.log("36) Added a class of test to each row in the table")

/*----------- EX 37 -----------*/
/* 37) Write a function to add a red background to every link in the page */

function addRedBackground() {
    let linkChange = document.getElementsByTagName("a")
    for(let link of linkChange) {
        link.style.backgroundColor = "red";
    }
}

addRedBackground()
console.log("37) Changed the background links to red")

// create CSS class
// function addRedBackground

/*
function addRedBackground() {
    let newBackground = document.createAttribute("style")
    newBackground.value = "background-color:red";
    let linkChange = document.getElementsByTagName('a')[0];
//   for (let i = 0; i < linkChange; i++) {
    linkChange.setAttributeNode(newBackground);
// }
}
addRedBackground()
// only adds to first link
*/

/*----------- EX 38 -----------*/
/* 38) Console log "Page loaded" when the page is correctly loaded */

function pageLoaded() {
    console.log("Page Loaded")
}

window.onload = pageLoaded
console.log("38) Console log 'Page Loaded' when page loads correctly")

// not sure why always goes to the bottom of the console

/*----------- EX 39 -----------*/
/* 39) Write a function to add new items to a unordered list */

function addNewItemsToUoList() {
    let unorderedListNode = document.getElementsByTagName("ul")[0];

    let newListItem = document.createElement('li');
    newListItem.innerText = "New item on the list";
    unorderedListNode.appendChild(newListItem);
}

console.log("39) Add new items to unordered list")
addNewItemsToUoList()

/*----------- EX 40 -----------*/
/* 40) Write a function to empty a list */

function emptyList() {
    let unorderedListNode = document.getElementsByTagName("ul")[0];
    unorderedListNode.innerHTML = ' '
}

// emptyList()
console.log("40)Emptied the ul list (call using emptyList()")

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

/*----------- EX 41 -----------*/
/* 41) Add an eventListener to show an alert when the cursor hovers a link, displaying its href property */

function linkDisplay() {
    alert(this.href);
}
let links = document.getElementsByTagName('a');
for (let link of links) {
    link.addEventListener("mouseover", linkDisplay)
}

console.log("41) Alert added to every link")

/*
function linkHover (event) {
let links = document.querySelectorAll('a')

links.forEach(a => {
    a.addEventListener('click', function hoverDisplay(event) {
        console.log('link hover', event);

        a.setAttribute('mouseover', linkHover)
    })
    alert(a.getAttribute("href"));
})
}
*/

/*
function linkHover(event) {
    let links = document.getElementsByTagName('a')
}
for (let link = i; i < links.length; i++) {
    link.addEventListener("mouseover", function() {
    alert(link.getAttribute("href"));
})
}
*/

/*----------- EX 42 -----------*/
/* 42) Create a button that will hide every image on the page when clicked */

/*
function hideImages() {
    let images = document.getElementsByTagName("img");
  
    for (let image of images) {
      image.classList.toggle("hide");
    }
  }
hideImages()
*/

/*
function hideImages() {
    let images = document.querySelectorAll("img");
    for (const iterator of images) {
        iterator.style.visibility = "hidden";
    }
}
*/

/*
function hideImage() {
    if (document.getElementsByClassName) {
        document.getElementsByClassName("hideImages").style.visibility = 'hidden';
    }
}
hideImage()
*/

/*
    let images = document.getElementsByClassName("hideImages");
    for (let image of images) {
        image.classList.toggle("hideImages")
    }
}
*/

/*----------- EX 43 -----------*/
/* 43) Create a button that will hide or show the table on the page when clicked */

/*----------- EX 44 -----------*/
/* 44) Write a function for calculating the sum of every number inside all the table cells (if their content is numeric) */

/*----------- EX 45 -----------*/
/* 45) Delete the last letter from the heading each time the user clicks on it */

/*----------- EX 46 -----------*/
/* 46) Change the background color of a <td> if the user clicks on it */

/*----------- EX 47 -----------*/
/* 47) Add a delete button at the bottom of the table, when clicked it should delete a random <td> */

/*----------- EX 48 -----------*/
/* 48) Add automatically a pink border to a cell when the mouse hovers it */

/*----------- EX 49 -----------*/
/* 49) Write a function to create a table with 4 rows and 3 columns programmatically and add it to the bottom of the page */

/*----------- EX 50 -----------*/
/* 50) Write a function to remove the last table from the page
 */



/* WHEN YOU ARE FINISHED
  Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/

