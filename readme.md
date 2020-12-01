# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @stewartmac/lotide`

**Require it:**

`const _ = require('@stewartmac');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: asserts whether two arrays parameters are equal.
* `assertEqual`: asserts whether two non-array parameters are equal.
* `assertObjectsEqual`: asserts whether two object parameters are equal.
* `countLetters`: counts the letters in a string.
* `countOnly`: counts items in an array and adds it to an object.
* `eqArrays`: checks if two arrays are equal.
* `eqObjects`: checks if two objects are equal.
* `findKey`: takes in an object and a callback. Scans the object and return the first key for which the callback returns a truthy value.
* `findKeyByValue`: takes in an object and a value. Scans the object and return the first key which contains the given value.
* `flatten`:  takes in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
* `head`: returns the first element of an array.
* `letterPositions`: Return the indices of a string where each character is found.
* `map`: return a new array based on the results of the callback function.
* `middle`: returns the middle element of an array.
* `tail`: return the tail elements of an array.
* `takeUntil`: returns all the values out of an array or string until a specified condition.
* `without`: return an array with the given values excluded.