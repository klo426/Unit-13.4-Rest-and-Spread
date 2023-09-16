// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

const filterOutOdds = (...nums) => {
    return nums.filter ((num) => {
        return num % 2 === 0
    });
}

// Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.

// Make sure to do this using the rest and spread operator.

// findMin(1,4,12,-3) // -3
// findMin(1,-1) // -1
// findMin(3,1) // 1

const findMin = (...nums) => {
    return Math.min(...nums);
}

// Write a function called ***mergeObjects*** that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

// mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}

const mergeObjects = (obj1, ...restObjects) => {
    return restObjects.reduce((mergedObj, obj) => {
        return{...mergedObj, obj};
    }, {obj1});
}

// For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!

// Make sure that you are always returning a new array or object and not modifying the existing inputs.

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (...items) => {
    const randomIndex = Math.floor(Math.random() * items.length);

    return [...items.slice(0, randomIndex), ...items.slice(randomIndex + 1)];

};

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => {
    return [...array1, ...array2];

}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
    return {
        ...obj,
        [key]: val,
    };
};


/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
    const newObj = {...obj};
    delete newObj[key];
    return newObj;
};


/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
    return {
        ...obj1,
        ...obj2,
    };

};


/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
    return {
        ...obj,
        [key]: val;
    };

};