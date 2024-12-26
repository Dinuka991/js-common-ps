var arr1 = [1, 3, 4, 5, 6];
var arr2 = [6, 3, 5, 6, 9];


// Type 1
const findIntersection = (arr1, arr2) => {
    let newArr = [];

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                if (!newArr.includes(arr1[i])) {
                    newArr.push(arr1[i]);
                }
            }
        }
    }
    return newArr;
};

// Type 2 using filters


const findIntersection2  = (arr1 , arr2) => {

let newArr = [];

   let result =  arr1.filter( t -> arr.includes(t)).

}

console.log(findIntersection(arr1, arr2)); // Output: [3, 5, 6]


//-----------------------------------------------------------------

const reverseString = (string) => {
    let arr = string.split(''); // Convert string to an array of characters
    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }

    return arr.join(''); // Join the array back into a string
};

// Example usage
console.log(reverseString("hello")); // Output: "olleh"


//------------------------find the palindrom----------------------------------------------

const findThePalindrome = (str) => {
    let arr = str.split(''); // Convert string to array
    let i = 0;
    let j = str.length - 1;

    while (i < j) {
        if (arr[i] !== arr[j]) {
            return false; // Return false if a mismatch is found
        }
        i++;
        j--;
    }
    return true; // Return true if all characters match
};

// Example usage
console.log(findThePalindrome("racecar")); // Output: true
console.log(findThePalindrome("hello"));   // Output: false


// Find the max  value of the array

const findTheMaxValueOfArray = (arr) => {
    if (arr.length === 0) {
        return null; // Handle empty array case
    }

    let max = arr[0]; // Initialize max with the first element
    let i = 0; // Initialize the loop counter

    while (i < arr.length) {
        if (arr[i] > max) {
            max = arr[i]; // Update max if the current element is greater
        }
        i++;
    }

    return max; // Return the maximum value
};

// Example usage
console.log(findTheMaxValueOfArray([1, 2, 3, 4, 5])); // Output: 5
console.log(findTheMaxValueOfArray([-10, -20, -5, -1])); // Output: -1
console.log(findTheMaxValueOfArray([])); // Output: null



const findTheFirstNoneRepetitive = (arr) => {
    let charMap = new Map();

    // Populate the map with character counts
    let i = 0;
    while (i < arr.length) {
        charMap.set(arr[i], (charMap.get(arr[i]) || 0) + 1);
        i++;
    }

    // Find the first non-repetitive character
    for (const [key, value] of charMap) {
        if (value === 1) {
            return key;
        }
    }

    return null; // Return null if no non-repetitive character is found
};

// Example usage
const array = ['a', 'b', 'c', 'a', 'b', 'd'];
console.log(findTheFirstNoneRepetitive(array)); // Output: 'c'

const array2 = ['x', 'x', 'y', 'y', 'z', 'z'];
console.log(findTheFirstNoneRepetitive(array2)); // Output: null










